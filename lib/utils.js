import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// lib/getAverageBrightness.js
import getColors from "get-image-colors";
import fs from "fs";
import path from "path";

export async function getAverageBrightness(imagePath) {
  try {
    // Ensure it's a local path (convert from /public if needed)
    const localPath = path.join(process.cwd(), "public", imagePath.replace(/^\/+/, ""));
    if (!fs.existsSync(localPath)) {
      console.warn(`Image not found: ${localPath}`);
      return 150; // default mid brightness
    }

    const colors = await getColors(localPath, { type: "image/png" });
    const rgb = colors[0].rgb();
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness;
  } catch (err) {
    console.error("Color extraction failed:", err);
    return 150; // neutral brightness
  }
}
