# Muniraj Karnik | Official Campaign Portal

A modern, highly responsive political portfolio and civic engagement portal built for Muniraj Karnik's 2026 campaign. This Next.js application focuses on community outreach, transparent communication of legacy milestones, and direct citizen feedback.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## ✨ Key Features

- **Responsive Hero Section:** Immersive entry point with subtle video backgrounds and dynamic scrolling interactions.
- **"Journey of Dedication" Timeline:** An alternating historical timeline detailing three decades of public service, augmented with smooth watermark interactions.
- **Explore Initiatives (Sub-Filter Hub):** A swipeable, horizontal mobile-friendly tab system to explore Community Work, Announcements, and Upcoming Plans.
- **Dynamic Services Gallery:** A responsive Bento-grid layout highlighting recent civic resolutions (e.g. Tree Clearance, Rapid Response) utilizing native arrays for multi-image displays per service.
- **"Your Voice Matters" Portal:** A direct community feedback form utilizing native HTML5 APIs to instantly collect precise Geo-Location tags and direct Camera/Photo attachments directly from citizens.

## 🛠 Getting Started

First, install the dependencies using pnpm:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portal.

## 📁 Project Structure

The UI components are cleanly modularized within `components/sections/`:
- `hero-section.tsx` - Initial immersive video & entry portal
- `legacy-section.tsx` - "A Journey of Dedication" alternating timeline
- `explore-section.tsx` - Sub-filtered dynamic news and announcement tabs
- `services-section.tsx` - Bento-grid featuring real civic services rendered
- `moments-section.tsx` - Custom prioritized horizontal image carousel
- `join-section.tsx` - "Your Voice Matters" contact, location & attachment integration

## 🏗 Future Architecture

The current citizen feedback forms (`join-section.tsx`) are configured to handle mock submissions. A comprehensive `backend_suggestions_architecture.md` has been drafted to outline the future implementation of PostgreSQL (via Prisma), robust S3 Image uploads, and a secure admin dashboard.
