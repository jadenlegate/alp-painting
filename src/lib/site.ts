// Site-wide constants. Eventually most of this should live in Sanity
// (siteSettings singleton) so non-devs can edit it. For now, hard-coded
// keeps the scaffold simple — swap to Sanity later.
export const SITE = {
  name: "Alpenglow Painting",
  legalName: "Alpenglow Painting Inc.",
  tagline: "The painting experience the Sea to Sky deserves.",
  subline:
    "Clean crews. Clear communication. A 10-year warranty that proves we mean it.",
  phone: "(604) 938-4037",
  phoneRaw: "+16049384037",
  email: "hello@alpenglowpainting.ca",
  address: {
    city: "Whistler",
    region: "BC",
    country: "Canada",
  },
  serviceAreas: ["Creekside", "Whistler Village", "Benchlands", "Alpine Meadows", "Emerald Estates", "Function Junction", "Cheakamus", "Spruce Grove"],
  hours: "Mon–Fri, 8am–6pm, year-round",
  social: {
    google:
      "https://www.google.com/search?q=alpenglow+painting+whistler",
    instagram: "https://www.instagram.com/alpenglow.painting",
    facebook: "https://www.facebook.com/alpenglowpainting",
    tiktok: "https://www.tiktok.com/@alpenglow.painting",
  },
} as const;
