import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FEATURES = [
  {
    title: "Immersive 3D Visualization",
    description: "Allow customers to explore dishes in stunning 3D, enhancing their ordering experience.",
  },
  {
    title: "Seamless Integration",
    description: "Easily connect augmented reality menus with your existing ordering system for smooth operations.",
  },
  {
    title: "Boost Customer Engagement",
    description: "Increase interaction and sales by captivating customers with innovative AR menu presentations.",
  },
];
