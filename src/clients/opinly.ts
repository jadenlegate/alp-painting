import { createOpinlyClient } from "@opinly/backend";

// Opinly data client. Reads OPINLY_API_KEY from the environment — set it in
// .env.local for local work and in Vercel project env vars (Production AND
// Preview) for deploys.
//
// The client is created LAZILY: @opinly/backend throws at creation time when
// the key is missing, and doing that during module evaluation kills the whole
// `next build`. Deferring creation to first use means a missing key surfaces
// as a call-time error inside callers' try/catch blocks (blog route, sitemap,
// lead tracking) — pages degrade instead of builds failing.
//
// Every fetch is cached and tagged 'opinly' so the publish webhook
// (src/app/api/opinly/webhook) can drop the whole data cache at once.

type Client = ReturnType<typeof createOpinlyClient>;

let _client: Client | null = null;

function getClient(): Client {
  _client ??= createOpinlyClient({
    fetch: (url, init) =>
      fetch(url, {
        ...init,
        cache: "force-cache",
        next: { tags: ["opinly"] },
      }),
  });
  return _client;
}

export const opinly = {
  posts: (...args: Parameters<Client["posts"]>) => getClient().posts(...args),
  post: (...args: Parameters<Client["post"]>) => getClient().post(...args),
  author: (...args: Parameters<Client["author"]>) => getClient().author(...args),
  authors: (...args: Parameters<Client["authors"]>) => getClient().authors(...args),
  categories: (...args: Parameters<Client["categories"]>) => getClient().categories(...args),
  tags: (...args: Parameters<Client["tags"]>) => getClient().tags(...args),
  routes: (...args: Parameters<Client["routes"]>) => getClient().routes(...args),
  rss: (...args: Parameters<Client["rss"]>) => getClient().rss(...args),
  track: (...args: Parameters<Client["track"]>) => getClient().track(...args),
  trackPurchase: (...args: Parameters<Client["trackPurchase"]>) => getClient().trackPurchase(...args),
};
