import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

// Embedded Sanity Studio — available at /studio when the dev server is running.
// In production, deploy via `npx sanity deploy` to host it on sanity.io/studio
// or keep it embedded in the Next.js app (it deploys to Vercel automatically).
export default defineConfig({
  name: "alpenglow-painting",
  title: "Alpenglow Painting",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [
    structureTool(),
    visionTool(), // GROQ query playground — useful for debugging
  ],
  schema: {
    types: schemaTypes,
  },
});
