import { Skip } from "@/types/skip";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateTags(skip: Skip): string[] {
  const tags: string[] = [];
  if (!skip.allowed_on_road) tags.push("Private Property Only");
  if (!skip.allows_heavy_waste) tags.push("Not Suitable for Heavy Waste");
  return tags;
}