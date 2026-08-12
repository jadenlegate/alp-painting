import { createOpinlyClient } from "@opinly/backend";

// Opinly data client. Reads OPINLY_API_KEY from the environment — set it in
// .env.local for local work and in Vercel project env vars for deploys.
// Every fetch is cached and tagged 'opinly' so the publish webhook
// (src/app/api/opinly/webhook) can drop the whole data cache at once.
export const opinly = createOpinlyClient({
  fetch: (url, init) =>
    fetch(url, {
      ...init,
      cache: "force-cache",
      next: { tags: ["opinly"] },
    }),
});
