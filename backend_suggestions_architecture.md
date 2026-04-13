# Backend Architecture: Your Voice Matters Portal

This document outlines the infrastructure, database schema, and API requirements needed to support the dynamic "Your Voice Matters" web portal. 

## 1. System Overview

The system consists of two primary workflows:
1. **Submission Workflow**: Users submit suggestions (optionally attaching photos or location pins). The system saves the payload and returns a unique, anonymous 6-character alphanumeric `AccessCode`.
2. **Tracking Workflow**: Users input an `AccessCode` to view the live status of their suggestion, progressing through a defined set of milestones (Received, Reviewed, Action in Progress, Resolved).

## 2. Infrastructure Requirements

For a modern Next.js/React application, the recommended backend stack is:
- **Database**: PostgreSQL (via Supabase, Vercel Postgres, or Prisma).
- **Storage**: AWS S3 or Vercel Blob (for securely storing user-uploaded media).
- **API Framework**: Next.js App Router (Server Actions or API Routes).

## 3. Database Schema

### Table: `Suggestions`

This is the core table representing a submitted issue.

| Column Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` (Primary Key) | Unique identifier for internal DB joins |
| `accessCode` | `VARCHAR(6)` (Indexed) | The tracked MK-XXXXX code given to the user |
| `suggestionText` | `TEXT` | The content typed out by the user |
| `status` | `ENUM` | Current phase (`RECEIVED`, `REVIEWED`, `ACTION_TAKEN`, `RESOLVED`) |
| `latitude` | `FLOAT` (Optional) | GPS location pin coordinate |
| `longitude` | `FLOAT` (Optional) | GPS location pin coordinate |
| `photoUrl` | `VARCHAR` (Optional) | S3 blob URL linking to the uploaded photo |
| `createdAt` | `TIMESTAMP` | When the suggestion was made |
| `updatedAt` | `TIMESTAMP` | When the team last updated the status |

### Table: `StatusLogs` (Audit Trail)

For compliance and transparency, we recommend tracking when statuses shift.

| Column Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `UUID` (Primary Key) | Internal ID |
| `suggestionId` | `UUID` (Foreign Key) | Reference to the `Suggestions` table |
| `newStatus` | `ENUM` | The status that it changed to |
| `changedBy` | `UUID` | Admin user who made the change |
| `createdAt` | `TIMESTAMP` | When this specific status change occurred |

## 4. API Endpoints

### `POST /api/suggestions/submit`
- **Request Body**: `{ suggestionText, GPS?, photoBlob? }`
- **Action**: 
  1. Generates a collision-resistant 6-character code (e.g., `MK-8A9X2`).
  2. Uploads `photoBlob` to S3 (if present) and gets a URL.
  3. Inserts a new row into `Suggestions` with default status `RECEIVED`.
- **Response**: `{ success: true, accessCode: "MK-8A9X2" }`

### `GET /api/suggestions/track?code=MK-8A9X2`
- **Action**: Queries the `Suggestions` table by the indexed `accessCode`.
- **Response**: Returns the status enum and timestamps ` { status: "REVIEWED", createdAt: "..." }`. Note: *Do not return user-identifiable constraints or the raw text* if this endpoint is public. This ensures no data-scraping privacy leaks.

## 5. Admin Panel Operations

A secure backend dashboard should be built for Muniraj's core team.
- **Queue View**: Team logs into `admin.munirajkarnik.com` to see a list of all incoming suggestions.
- **Workflow Tools**: Team can click "Mark as Reviewed" or "Action Taken", which updates the `Suggestions.status` enum and triggers a new row in the `StatusLogs`.
- **Reporting**: Weekly exports on how quickly issues move from "Received" to "Resolved" to ensure grassroots accountability metrics are met.
