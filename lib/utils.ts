import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const basePath = process.env.NODE_ENV === 'production' ? '/muniraj-portfolio' : '';

export function getImagePath(path: string) {
  if (path.startsWith('http')) return path;
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
}
