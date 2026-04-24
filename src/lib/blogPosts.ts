// Single source of truth for blog posts. Imported by:
//   - src/app/(site)/blog/page.tsx (list view)
//   - src/app/(site)/blog/[slug]/page.tsx (detail view, generateStaticParams, generateMetadata)
//   - src/app/sitemap.ts (URL generation)
//
// Content is authored in GitHub-flavored Markdown and rendered via react-markdown +
// remark-gfm in the post template. Supported: H2/H3 headings, paragraphs, bold/italic,
// bullet and ordered lists, inline links, blockquotes. Keep post bodies in the 900-1,400
// word range; see the blog plan for the full house style guide.

export type BlogCategory =
  | "Exterior"
  | "Interior"
  | "Wood restoration"
  | "Cabinet refinishing"
  | "Commercial"
  | "Seasonal"
  | "Cost & hiring"
  | "Process"
  | "Case study"
  | "Advice";

export type Post = {
  slug: string;
  title: string;
  publishedAt: string; // ISO date
  excerpt: string;
  coverUrl: string;
  category: BlogCategory;
  content: string;
};

export const POSTS: Post[] = [
  {
    slug: "choosing-a-painting-contractor-whistler",
    title: "Choosing a painting contractor in Whistler: what actually matters",
    publishedAt: "2025-10-02",
    excerpt:
      "Price is the easiest thing to compare across painting quotes and the worst signal you can rely on. Here's what a careful homeowner in Whistler looks at before they hire — and what the quiet red flags are.",
    coverUrl: "/stock-images/portfolio/alpenglow-painter-exterior-prep-whistler.jpg",
    category: "Advice",
    content: `Hiring a painting contractor in Whistler is not like hiring one in Vancouver. The crew you pick is often smaller, the jobs are often bigger, and the weather window for exterior work is a real constraint. If you pick wrong, you find out slowly — peeling around window trim in year two, a crew that never comes back for the warranty callback, a chalet that needs another full exterior before you've finished paying off the last one.

This post is what we'd tell our own neighbours about how to evaluate a painting contractor in Whistler, short of recommending us.

## Start with who's actually on the job

The number you care about isn't on the estimate. It's who shows up in your driveway the first morning. Some companies sell themselves on the owner's reputation and then subcontract everything to a crew you've never met. Ask directly: are your painters employees or subs? How long have they worked together? Who's on site every day?

A small local crew that has worked together for three seasons will usually produce a better finish than a large outfit with rotating subs. We're biased, obviously — but the reason we stay small is that we can actually stand behind what leaves the site.

## Get specific about what "prep" means

"Full prep included" is a line in every estimate. It means nothing unless it's broken down.

On an exterior project we specify, in writing:

- Pressure washing pressure range (low-pressure for cedar, higher for stucco or Hardie)
- Scraping and sanding approach on failed areas
- Priming plan: what's getting spot-primed, what's getting full-primed, and with which product
- Caulking: which joints get replaced, which get topped up, and what caulk is specified
- Masking for plants, windows, hardware, and driveways

If a quote doesn't mention any of that, it's not because the prep is assumed. It's because it's not priced in. You'll find out at day three when the crew is already on your siding.

## Ask for the written scope before you compare prices

Two quotes at $18,500 and $24,000 mean nothing if you don't know what each one includes. Before comparing numbers, line them up against each other on scope. What surfaces? How many coats? Which products? What's explicitly excluded?

This is especially important on exterior work in [the Sea to Sky](/painters/whistler), where conditions change by elevation. A coat plan that works for a home on a sunny Pemberton bench won't always work for a north-facing chalet in Kadenwood.

## Look for references close to your actual project

A contractor who has painted fifteen interiors in town is the wrong reference for an exterior cedar restoration on a log home. Ask for a reference from a project that's structurally similar to yours — same rough scope, same surface type, same general vintage of home. If they can't provide one, that's information.

For commercial or strata work, ask for a reference from a property manager, not a homeowner. The questions the property manager asks are closer to the ones you'll be asking.

## The insurance and WCB conversation

Every painting contractor working in BC should have commercial general liability insurance and active WorkSafeBC coverage. Ask for certificates. Look at the coverage limits. $2M is a reasonable floor for residential; we carry $5M for larger jobs. WCB coverage should be current — not "applied for" or "in process."

A contractor who hesitates when you ask for this is a contractor who has something to hedge about. [Here's our full breakdown of what to actually verify on the insurance side.](/blog/what-to-ask-a-painting-contractor)

## Red flags you can spot in the first phone call

Most of the signals are in how the contractor talks to you before anyone has committed to anything. In no particular order:

- They quote a ballpark over the phone without seeing the home.
- They push for a deposit before the proposal is written.
- They can't name the specific products they'd specify.
- They promise to "squeeze you in" in peak season in a way that feels too convenient.
- Their written proposal, when it arrives, is a single-line email with a total.

None of these are automatic dealbreakers. A friend's uncle who's painted for 30 years might skip the formal proposal and still do good work. But the pattern, across multiple signals, usually tells you something.

## What a careful process looks like

From our side, a first conversation usually goes like this. We'd schedule a site visit within the week. We walk the exterior or the rooms with you, ask about colour direction, look at the existing condition, and talk honestly about what the substrates need. We then write the proposal — scope, products, timeline, warranty terms — and send it within a few days. We go over it on a call or in person, not over email. Deposits don't get collected until the proposal is signed and a start date is locked.

That's what we'd hope you get from whoever you hire, whether it's us or somebody else.

## Next step

If you're comparing painting contractors in Whistler right now, the most useful thing you can do is get two written proposals, line them up on scope before price, and ask both firms the six questions in [our hiring guide](/blog/what-to-ask-a-painting-contractor).

If you'd like us to write one of those proposals, [get in touch](/contact). Site visits are free, and the proposal usually follows within a week.`,
  },
  {
    slug: "exterior-painters-whistler-mountain-climate",
    title: "Exterior painters in Whistler: what the mountain climate actually does to paint",
    publishedAt: "2025-09-18",
    excerpt:
      "A paint job on a Whistler chalet has to survive UV at altitude, 180 freeze-thaw cycles a year, and melt-out moisture that lingers into June. It's a different problem than painting in Vancouver. Here's how we approach it.",
    coverUrl: "/stock-images/portfolio/cedar-chalet-exterior-whistler.jpg",
    category: "Exterior",
    content: `A coat of exterior paint on a house in Kitsilano has to handle rain and some UV. The same coat on a chalet in Kadenwood has to handle UV at 750 metres of elevation, daily freeze-thaw cycles from October through May, snow sitting against the north face for months, and melt moisture that gets under trim and soffits every spring. It is a harder job, and a paint system that's fine in the city fails on the mountain.

Exterior painters in Whistler have to specify and execute for that reality. Here's how we think about it.

## Why mountain exteriors are harder

The three big stressors up here are UV, freeze-thaw, and moisture retention.

UV at elevation is intense. Chalky, fading south and west faces show up years earlier than on comparable homes in the Lower Mainland. A lot of common "premium" paints are formulated for typical Canadian conditions, which don't include sustained high-UV exposure at 700–1200 metres.

Freeze-thaw is the other big one. Temperatures in the Sea to Sky cycle above and below zero dozens of times each shoulder season. Every cycle expands and contracts the substrate. A paint film that can't flex with it — because it was applied thick, applied cold, or adhered poorly — will crack.

Moisture retention matters because snow doesn't just sit on the roof. It drifts against walls, sits on decks, and melts slowly. The wood behind a paint film stays wetter for longer than it does at lower elevation, and any paint system that doesn't breathe properly traps it.

## The three surfaces that fail first

On most Sea to Sky exteriors, we see failure first on:

1. **Horizontal trim around windows.** Water pools, UV hits it hard, and caulking fails before the rest of the trim does.
2. **South and west-facing siding at the top of the wall.** UV dose is highest here and the prep was often the lightest when the home was last painted.
3. **Fascia boards and deck railings.** End grain exposed to both sun and water, coated with something that wasn't designed for it.

When we walk a chalet exterior, these are the three things we check first. If the homeowner says "it's been eight years and it still looks great," but the south-facing fascia is chalky, the paint job is closer to failing than they think.

## Products we actually specify up here

A short list of what we reach for on Sea to Sky exteriors:

- **Sikkens Cetol SRD Plus** — our default for rough-sawn cedar and timber-frame members. Penetrates, flexes, breathes. Reapplies without stripping.
- **Benjamin Moore Aura Exterior** — when a customer wants a painted exterior (as opposed to stained cedar), this is the top of our list. UV-rated, holds colour.
- **Sherwin-Williams Duration** — comparable tier, often what we recommend when a client has a colour matched in the Sherwin fan.
- **Sansin ENS** — when a cedar home needs a high-film stain with long UV performance.

Every choice is substrate-specific. The same home might get Cetol on the board-and-batten cedar, Aura on the painted Hardie trim, and an oil-based enamel on the metal entry door.

## Timing: why we don't start exteriors in October

Paint has a cure window. Most modern acrylics want air temperatures above about 10°C for at least 24 hours after application. In Whistler, that window is June through mid-September reliably, with April–May and late September–early October as shoulder season.

Late-season jobs fail more often than homeowners realize. Paint applied in October might feel dry to the touch but hasn't fully coalesced before the first hard frost hits. The film ends up brittle, with adhesion compromised, and a year later you see peeling that nobody can explain.

We book our exterior work tight between June and mid-September for exactly this reason. When a client asks if we can start in late October, we usually say no — and we say why. More on that in [our timing guide for Whistler exteriors](/blog/when-to-paint-exterior-whistler).

## What a proper exterior project looks like

Our typical exterior on a Sea to Sky home follows a pattern.

Week one is setup and prep: protect the landscaping, wash the entire exterior, scrape and sand failed areas, replace caulk, repair any rotten fascia or trim (our [light carpentry service](/services/light-carpentry) handles this in the same project so there's no scheduling gap).

Week two is priming and first coat. We spot-prime bare wood, then apply the first finish coat in controlled weather windows.

Week three is the second coat, final walkthrough, and project report. You get a written document listing every product used, every area covered, and the warranty terms.

On bigger chalets — full three-storey exteriors, cedar restorations, homes with a lot of timber members — the schedule stretches to four or five weeks. We set the schedule up front. If weather kills a day, we tell you the same morning.

## Where to go from here

If you're thinking about an exterior project in Whistler for the coming summer, book early — our best crews fill up by the end of April. Our [exterior painting service page](/services/exterior-painting) covers the longer version of what we do and what's included.

If your project is already past the planning stage and you just want a site visit, [get in touch](/contact). A 20-minute walk-around tells us almost everything we need to know about what the coating is doing.`,
  },
  {
    slug: "interior-painting-whistler-what-to-expect",
    title: "Interior painting in Whistler: what a proper project actually looks like",
    publishedAt: "2025-09-03",
    excerpt:
      "Most interior painting goes wrong at the edges — at the trim, the ceiling line, the corners behind furniture. Here's how we approach interior painting in a Whistler home so the finish holds up and your life isn't on pause for two weeks.",
    coverUrl: "/stock-images/portfolio/finished-interior-chandelier-whistler.jpg",
    category: "Interior",
    content: `Interior painting is the service homeowners think is simple and then discover isn't. A fast crew can paint four rooms in a day. A careful crew doing the same rooms properly — protecting the floors, dustless-sanding the trim, cutting tight lines at the ceiling, finishing the closets — takes three or four days. You can tell which you got six months later, when the high-traffic edges either still look clean or already have fingernail marks and scuffs that aren't coming out.

This is what interior painting in Whistler looks like when it's done properly, and why we run our projects the way we do.

## The walkthrough: what we're actually looking for

Before we quote an interior, we walk every room with you and look at five things:

1. **Wall condition.** Cracks, nail pops, old patches, areas of previous water damage. Each gets a specific prep approach.
2. **Trim condition.** Whether the trim is oil-based or latex matters enormously for the next coat. Oil under latex peels. We test when we're not sure.
3. **Ceilings.** Are they flat, textured, or tongue-and-groove? Each wants different prep and different products.
4. **The corners and closets.** The places that didn't get done well last time. That's where we start seeing what the previous painter's standard actually was.
5. **Flow between rooms.** What colours touch each other, where the edges land, whether we're repainting the baseboards through to the next room.

On a chalet with a lot of wood, we also talk about whether the client wants to keep the natural wood or move toward a lighter, more painted interior. Both are valid calls, and they have very different price tags.

## Prep changes everything

Most interior paint failures aren't about the paint. They're about prep.

On drywall, proper prep means filling all nail pops and hairline cracks, sanding them flat, spot-priming with a stain-blocking primer where needed, then applying the finish coats. Rushing past any of those steps shows up within months — usually as a visible patch outline under the new paint, or as flashing in raking light.

On plaster walls (some older Whistler homes still have them), it's about respecting the texture. You don't sand plaster flat. You repair to match.

On tongue-and-groove ceilings — common in older chalets — you typically choose between preserving the natural wood finish or transitioning to a painted ceiling. If painted, every knot has to be primed with a dedicated knot-sealer (we use BIN shellac) or tannin bleeds through. Two coats over that. More on tannin bleed [here](/blog/painting-over-knots-tannin-bleed-softwoods).

## Products we reach for

For interior walls, we default to Benjamin Moore Regal Select or Aura depending on wear expectations. Regal Select is excellent for most bedrooms and living areas. Aura goes in high-touch areas — entryways, mudrooms, kids' rooms, kitchens — where scrubbability matters.

For trim, Benjamin Moore Advance is our usual pick. It's a waterborne alkyd that levels like an oil-based paint but cleans up with water. Finish is hard and holds up to the knocks trim takes.

For ceilings, we use Benjamin Moore Waterborne Ceiling Paint or Sherwin-Williams ProMar Ceiling. Both are flat, no-spatter, easy to cut around fixtures.

## How a crew can work in an occupied home without wrecking your week

Interior painting in an occupied home is as much about logistics as painting. We set expectations at the start: which rooms will be unavailable on which days, how we'll handle dust and smell, what to move and what we'll cover ourselves.

Standard approach on a typical four-bedroom Whistler home:

- Day one: mask and prep all rooms in scope. Move furniture to room centres, cover with breathable cloth.
- Day two–three: ceilings and wall coats, staggered so no more than two rooms are actively wet at once.
- Day four: trim and final detail.
- Day five: de-mask, touch-ups, final walkthrough.

We don't leave a house in a state where you can't eat dinner or find the bathroom. You always have a clear path through the house.

For clients with kids or pets, we use low-VOC products wherever possible. Benjamin Moore Aura and Regal Select both have very low odour profiles.

## What a completed interior project looks like

Before we call a project done, we walk it with you under good light — both daylight and at night with all the interior lights on. Flashing that's invisible in shadow shows up under raking light. We touch up anything we find.

You get a written project report: every colour with its exact formula, every product used, and the warranty terms. If you ever want a touch-up in year three, you can buy the exact paint without us having to go look. It's also useful for resale.

## Where to start

The [interior painting service page](/services/interior-painting) has our longer walkthrough of what's included. If you're weighing a repaint against something bigger — say, a kitchen refresh that includes cabinets — [our comparison of cabinet refinishing vs full replacement](/blog/cabinet-painting-vs-replacement) is a useful starting point.

When you're ready for a quote, [reach out](/contact). We usually get you on the schedule for a walkthrough within a week.`,
  },
  {
    slug: "cabinet-refinishing-whistler-pemberton-squamish",
    title: "Cabinet refinishing in Whistler, Pemberton, and Squamish: what the process actually looks like",
    publishedAt: "2025-08-20",
    excerpt:
      "Kitchen cabinet refinishing is the one paint service most general painters should not be doing. It's a specialty. Here's what a factory-grade refinish involves, what it costs, and why we do it off-site.",
    coverUrl: "/stock-images/tinted-coty2024-kitchen-1024x690.jpg",
    category: "Cabinet refinishing",
    content: `Cabinet refinishing has a reputation problem. Most homeowners have seen a kitchen that was "painted" a few years ago and now shows brush marks, chipped edges, and thin coverage on the door rails. That's what happens when a general painter treats cabinets like walls. Cabinets aren't walls. The finish they need is closer to what leaves the factory than what leaves a paint roller.

When cabinet refinishing is done properly — doors removed, sprayed off-site, finish cured hard — it lasts. And at roughly 25–30% of the cost of a full replacement, it's one of the highest-value updates you can do to a kitchen.

## Why cabinet work is harder than wall work

Three reasons:

**The finish has to be flat and hard.** Walls forgive roller texture. Cabinets don't. A finger running across a cabinet door immediately notices any bumps, sags, or brush marks. The standard for cabinets is closer to automotive than residential.

**Every surface gets handled constantly.** Walls mostly get looked at. Cabinets get grabbed, scrubbed, splashed, and bumped by dishware. A soft wall paint on a cabinet is scratched within weeks.

**Sight lines are brutal.** Kitchens have overhead lighting that rakes across every cabinet face. Any imperfection in prep or application is lit up.

That's why our cabinet process doesn't resemble our wall process. It resembles a furniture shop's.

## Off-site spray is the difference

Most cabinet refinishing failures are because the work was done on-site with brush and roller. The only way to get a factory-grade finish is to spray the doors and drawer fronts in a controlled environment, not in your kitchen with everything masked.

Our process:

1. Remove every door and drawer front. Label them so they go back exactly where they came from.
2. Transport them to our shop spray area. Degloss, sand, and fill any grain or damage.
3. Apply a bonding primer, sprayed, sanded between coats.
4. Apply two finish coats of a high-performance cabinet coating, sprayed.
5. Let cure for at least a week before reinstallation.
6. Return to the kitchen. Prep the boxes (the frames left in place), sand and prime them in place, apply the finish coat.
7. Reinstall all doors and drawers. Adjust hinges. Final walkthrough.

The boxes have to be done on-site because you can't remove them without tearing out the kitchen. But the doors and drawers — the parts you actually look at and touch — are done in a controlled spray environment.

## Products we use on cabinets

For most kitchens in Whistler, Pemberton, and Squamish, our default is **Benjamin Moore Advance**. It's a waterborne alkyd that sprays beautifully, cures to a hard finish, and holds up to kitchen wear for years.

For clients who want the hardest possible finish — usually in rental properties or second homes where durability outweighs everything — we use **Sherwin-Williams Emerald Urethane Trim Enamel**. It cures even harder than Advance.

On stained wood cabinets that a client wants to keep stained (just freshened up), we use penetrating finishes rather than film-forming paints. Different problem, different product.

## What changes between Whistler, Pemberton, and Squamish

The work itself doesn't change much. The logistics do.

A Whistler kitchen refresh we often run around the owner's schedule — they fly in for weekends, we work mid-week. Lots of our [Whistler cabinet projects](/painters/whistler) are in vacation homes, so the owner isn't living with the inconvenience.

A Pemberton kitchen is usually an owner-occupied primary residence. We plan for the family to eat out of a camp kitchen setup on the deck or basement for about a week. The boxes-in-place work is the noisiest and most disruptive — we usually get that done in two days.

A Squamish kitchen is often a younger family home with tighter budgets. We're more likely to be asked about shortcuts. We don't take them, but we're upfront about where the cost goes and why a $4,000 cabinet refinish is a $4,000 cabinet refinish and not a $1,200 one.

## Timeline

Typical project from first day to keys-back-in-the-drawers:

- Day 1: On-site removal and labelling of doors/drawers. Transport to shop.
- Days 2–3: Shop — degloss, sand, prime.
- Days 4–6: Shop — sand, spray finish coats, cure.
- Day 7 or 8: On-site — sand, prime, paint boxes in place.
- Day 9 or 10: On-site — second coat on boxes, let dry.
- Day 12 or later: Reinstall doors/drawers, adjust, final walkthrough.

Roughly two weeks start to finish, with about half of that being cure time where nothing visible is happening. You'll have a working kitchen (with exposed shelves) for most of the disruption window.

## Worth it?

We've written up [the full cost comparison of refinishing vs full replacement](/blog/cabinet-painting-vs-replacement). The short version: if your boxes are solid and your layout works, refinishing is almost always the right call. If the layout is wrong or the boxes are falling apart, replacement makes more sense.

To see whether your kitchen is a good candidate, [book a site visit](/contact). We'll tell you honestly which direction makes more sense before we quote it. Our longer [cabinet refinishing service page](/services/cabinet-refinishing) covers the service scope in more detail.`,
  },
  {
    slug: "wood-restoration-sea-to-sky-cedar-fir",
    title: "Wood restoration in the Sea to Sky: cedar, fir, and what the mountains actually do to wood",
    publishedAt: "2025-08-05",
    excerpt:
      "Most wood restoration questions in Whistler come down to: is this wood saveable, and what's the right finish to put back on it? Here's how we answer both — and why we don't agree with the strip-and-re-stain default.",
    coverUrl: "/stock-images/portfolio/cedar-ceiling-after-whistler.jpg",
    category: "Wood restoration",
    content: `Most Sea to Sky homes have more wood on the outside than homes in the Lower Mainland do. Cedar siding, fir timbers, hemlock soffits, cedar decks, timber-frame members. All of it takes a specific beating up here — UV at altitude, moisture from snow sitting against it for months, freeze-thaw cycles, and a growing season short enough that wood can't dry out as easily as it does further south.

Wood restoration is what brings those surfaces back when the existing finish has failed. Most of our restoration work in Whistler, Pemberton, and Squamish falls into three categories: re-staining cedar siding and decks, restoring timber-frame members, and bringing back tongue-and-groove ceilings on covered porches.

## What the mountains do to wood over 5–10 years

A typical un-maintained cedar exterior in Whistler will go through a predictable sequence.

Years 1–3: the original stain looks mostly intact but the south face is already showing UV fade.

Years 3–5: horizontal surfaces (fascia, top of railings, deck boards) start to strip first. End grain opens up. The colour becomes patchy — original where the sun hasn't hit, grey where it has.

Years 5–7: on neglected sidings, the finish is mostly gone on the exposed faces. Wood is grey, sometimes black where moisture has set in. Checking (small cracks) appears in the surface grain.

Years 8–10: the wood itself starts to degrade. Water gets into the checks, freezes, expands them. Softer wood behind decorative beads begins to erode. At this point, some boards may be unsaveable and need replacement.

The point of restoration is to catch this cycle before year 8. After that, you're not just re-staining — you're doing carpentry and re-staining, and the cost difference is significant.

## Stripping vs sanding vs chemical cleaning

Every restoration project starts with the same question: how do we get back to a surface the new finish can actually bond to?

We use three approaches depending on what's there:

**Brightening and washing.** If the existing finish is mostly intact and just weathered, a proper cedar brightener followed by a clean rinse often gets the wood back to a healthy colour without aggressive mechanical work. Ideal for 4–6 year old cedar that's been maintained.

**Sanding.** When the finish has failed and the surface is rough, mechanical sanding is often the best route. We use festool or similar dust-extracting sanders so we're not blowing cedar dust into the owner's windows. Sanding is labour-intensive but precise — we can stop exactly when the surface is right.

**Chemical stripping.** Rare, but sometimes necessary on old oil-based finishes that refuse to come off any other way. Messy, slow, and requires careful neutralization. We only reach for this when sanding would do more damage than good — typically on detailed trim profiles that can't be sanded without losing shape.

Most of our cedar restorations in the Sea to Sky use a combination of brightening and targeted sanding. Full strips are uncommon.

## Stain families we trust

After 10+ years of watching how different products hold up on mountain exteriors, we have opinions.

For rough-sawn cedar siding and timber-frame members, our default is **Sikkens Cetol SRD Plus**. Penetrates well, flexes with the substrate, doesn't form a hard film that'll peel. When it's time to reapply (usually 3–4 years), you clean and recoat — no stripping.

For smooth cedar decks and railings, **Armstrong-Clark oil-based stain** has held up excellently in our experience. It goes on wet, penetrates deep, and ages gracefully.

For painted (solid-stain) exteriors, **Benjamin Moore Arborcoat Solid** is reliable. You get colour consistency and long UV protection, with the tradeoff that when it eventually fails you have more prep work.

For log homes, **Sashco Capture** or **Sansin Classic** depending on the log profile and the client's colour direction. Log homes are their own problem and get their own quote.

We don't use every product on every job. Part of the site visit is looking at the specific substrate and the specific exposure and picking the right product for that wall — not the one we used on the last job.

## Why our crew does the same homes year after year

A lot of our wood restoration work is maintenance on homes we've worked on before. A Cetol-finished cedar exterior gets washed and recoated every 3–4 years. A deck stain gets refreshed every 2–3 years on heavily used decks. Timber-frame members can sometimes go 5–6 years between coats if they're protected by roof overhang.

The homes that last longest are the ones on a maintenance schedule, not the ones that get a big restoration every decade. We write the maintenance interval into the project report at the end of every job so the owner knows when to call.

## When wood is too far gone

Sometimes the honest answer is: this isn't restoration anymore, it's replacement. If more than a third of the boards on a wall are cupped, split, or rotten, it's usually cheaper to replace the siding before we stain than to try to save it. Our [light carpentry service](/services/light-carpentry) handles the replacement in the same project.

We tell homeowners this directly on the site visit. Nothing productive comes from finishing rotten wood.

## Next step

If you have cedar, fir, or timber-frame members on the exterior of a Sea to Sky home and you're not sure what shape they're in, [book a site visit](/contact). The longer version of what we do is on our [wood restoration service page](/services/wood-restoration). Pairs well with [our guide to oil vs stain for cedar](/blog/cedar-oil-vs-stain-which-is-right) if you're weighing which finish to put back on.`,
  },
  {
    slug: "commercial-strata-painting-whistler",
    title: "Commercial and strata painting in Whistler: scheduling around buildings that can't shut down",
    publishedAt: "2025-07-22",
    excerpt:
      "Strata repaints and commercial painting aren't harder than residential work — they're different. Communication is more formal, phasing matters, and the timeline has to be built around tenants, guests, or residents. Here's how we run these projects.",
    coverUrl: "/stock-images/portfolio/black-garage-door-finished-whistler.jpg",
    category: "Commercial",
    content: `The painters we see struggle with strata and commercial work aren't bad painters — they're good painters who haven't built the communication and logistics muscle these projects need. A residential repaint is a conversation with one or two owners. A strata repaint is a conversation with a council, a property manager, twenty or forty residents, and sometimes an external building consultant. The paint is the same. Everything around the paint is different.

We do this work across Whistler and the Sea to Sky for hotels, commercial buildings, strata councils, property managers, and custom home builders. Here's how we run these projects.

## The phasing conversation

Almost every commercial or strata project starts with: how do we do this without shutting the building down?

In a hotel, that means working around guest schedules. Corridor and exterior work happens when occupancy is lowest. Guest-facing surfaces get done during shoulder seasons. High-traffic stairwells get painted at night.

In a strata, it means phasing by building, floor, or wing. A 40-unit townhouse complex doesn't get painted all at once. We break it into phases — usually 4–8 units per phase — and rotate through the property over two or three months. Residents know when their unit is in the active phase and can plan accordingly.

In a commercial office building, it often means night and weekend work. The paint cost per hour is higher, but the cost of disrupting a tenant's operations is much higher. The math is usually clear.

The phasing plan is part of the proposal. It's not an afterthought. Before we quote, we walk the property with the owner or property manager, understand the constraints, and build the schedule around them.

## Communication with residents, guests, and staff

This is where most painting contractors lose strata councils. They show up, start spraying, and residents have no idea what's happening or when it'll stop.

Our standard for strata projects:

- Written resident notification 2 weeks before the start date, with a copy to the council.
- Printed schedule posted at every entrance showing which units are in which phase.
- 48-hour notice to individual residents before their unit's phase begins.
- Daily check-in with the property manager during active phases.
- Written closing report at the end of each phase and at project completion.

Residents don't care about our paint brand. They care about whether the deck outside their bedroom is going to be inaccessible for a day, and when. If they know in advance, complaints go away.

For hotels, substitute "guests" for residents and tighten the timelines. For commercial buildings, substitute "tenants."

## Documentation strata councils actually want

A strata council reviewing our proposal is usually looking at three or four competing bids. They need to compare them. We write proposals that make that comparison easy:

- Scope itemized by building and surface type, not in paragraphs.
- Product names for every coating, with manufacturer datasheets attached.
- Phasing schedule with dates.
- Insurance certificates (commercial general liability, WCB) as PDFs.
- Warranty terms in plain language, not legal boilerplate.
- Project management contact and escalation path.

At closeout, we deliver:

- Final product list keyed to surfaces covered.
- Photos of representative finished areas for the council record.
- Warranty documentation.
- Touch-up paint labelled and stored on-site.

Councils re-read this documentation three years later when they're planning maintenance. If it's organized, it makes the next cycle easier. That's part of why they call us back.

## Product choices for multi-unit buildings

Three things matter most in picking products for a strata or commercial building:

**Durability.** These buildings see higher traffic and take more abuse than a private residence. We tend toward products one tier above what we'd spec for a similar residential surface.

**Re-coatability.** In five years when a section of the building needs a touch-up or a phase redo, the product we used should still be available and still compatible with its own previous coat. We avoid house-brand products that change formulations every few years.

**Environmental compliance.** Multi-unit buildings in BC have tighter VOC expectations than many residential clients care about. We default to low-VOC products and confirm with the council before any exception.

Typical exterior spec on a townhouse strata: Benjamin Moore Aura Exterior or Sherwin-Williams Duration for painted siding and trim; Sikkens Cetol SRD Plus for any exposed cedar; Benjamin Moore Advance on painted doors.

## Insurance, WCB, and the certificates

Every strata manager will ask for these. Every good painting contractor has them ready. We carry $5M commercial general liability and maintain full WorkSafeBC coverage. Certificates of insurance naming the strata or the ownership entity as additional insured take us about one business day to produce.

If a contractor hesitates on any of this, that's the signal. [Full walkthrough of what to verify is here.](/blog/what-to-ask-a-painting-contractor)

## What the finished project looks like

A strata or commercial project we've finished looks like this:

- All contracted surfaces painted to scope.
- A closeout document packet in the strata office.
- Labelled touch-up paint for each colour used, stored accessibly.
- A maintenance schedule recommending when to review each surface type.
- A single-point contact at our company for warranty issues.

When the council meets next year to plan the following cycle, they open the packet and have everything they need.

## Where to start

Our [commercial, strata, and hotel painting service page](/services/commercial) has more on the scope of what we do and who we've worked with. If your project is a strata repaint, a hotel refresh, or a commercial building in the Sea to Sky, [reach out](/contact) and we'll set up a property walkthrough. Expect the first proposal within two weeks — commercial bids take longer than residential because the documentation is more substantial.`,
  },
  {
    slug: "how-long-does-exterior-paint-last-whistler",
    title: "How long does exterior paint last in Whistler? (And what shortens it)",
    publishedAt: "2024-09-15",
    excerpt:
      "UV exposure, freeze-thaw cycles, and late-season moisture are the main enemies of an exterior paint job in the Sea to Sky. Here's what to expect, and what to watch for.",
    coverUrl: "/stock-images/portfolio/exterior-repaint-finished-whistler.jpg",
    category: "Exterior",
    content: `A well-done exterior paint job in the Sea to Sky should last 7–10 years under normal conditions. The range is wide because "normal conditions" varies significantly between a Pemberton valley home with full sun exposure and a north-facing Whistler property that stays wet into June.

## What shortens a paint job

UV exposure is the primary driver of early failure. South and west-facing surfaces take the most sun and typically need attention first. Paint fades, chalks, and loses adhesion faster under sustained UV load.

Freeze-thaw cycles cause expansion and contraction in the substrate. If the paint film can't flex with it — because it was applied too thick, applied in cold weather, or the surface wasn't properly prepped — you'll see cracking and peeling within a few seasons.

Late-season application is a frequent cause of early failure that homeowners rarely hear about. Paint applied in October in Whistler often doesn't cure properly before freezing temperatures arrive. We don't do exterior work after mid-September for exactly this reason.

## What extends a paint job

The prep is worth more than the product. Paint applied over a clean, well-primed surface will outlast premium paint applied over a chalky or dirty one every time.

Product quality matters, but you're not spending as much on paint as you think. The labour is the cost. Using Sherwin-Williams Duration or Benjamin Moore Aura over a cheaper product adds maybe $300–500 to a full exterior. Given you're already spending several thousand on prep and labour, it's not the place to save.

## What to watch for

Check your paint yearly — look at south and west faces first. Signs of early failure include peeling (especially around windows and doors where moisture collects), chalking (a powdery residue you can wipe off), and cracking at caulk lines. Catching these early means a targeted touch-up, not a full repaint.

If you're unsure whether you're looking at routine wear or an early failure, [we're happy to take a look](/contact). A site visit on an exterior takes 20 minutes and tells us almost everything we need to know about what's going on with the coating.`,
  },
  {
    slug: "cedar-oil-vs-stain-which-is-right",
    title: "Cedar oil or stain: which is right for your home?",
    publishedAt: "2024-08-20",
    excerpt:
      "Both protect cedar — but they work differently, look different, and require different maintenance schedules. What you choose now will affect your next refinishing job.",
    coverUrl: "/stock-images/portfolio/stained-cedar-exterior-whistler.jpg",
    category: "Wood restoration",
    content: `Cedar needs to be protected from UV and moisture. The question is how — and both oils and stains are legitimate answers, with different trade-offs.

## Penetrating oils (Cabot, Sikkens, Armstrong Clark)

Penetrating oils soak into the wood rather than forming a film on top. They give cedar a rich, natural appearance and tend to age gracefully — they weather out rather than peel. Maintenance means cleaning and recoating every 2–4 years, but you're not sanding back to bare wood each time.

The downside: oils don't provide the same UV protection as a solid stain, and the appearance is warmer and more natural, not brighter or more saturated.

## Semi-transparent and solid stains

Stains sit more on the surface. Semi-transparent lets wood grain show through; solid stains cover it. Both provide strong UV protection and longer intervals between maintenance.

The trade-off is that when they eventually fail, they peel — which means more invasive prep work at the next refinish cycle.

## Our recommendation for most Sea to Sky cedar homes

For homes with natural cedar cladding where the grain and character of the wood are part of the look, we typically recommend a penetrating oil system. The maintenance cycle is shorter, but the product looks better and the prep cost at renewal is lower.

For homes where durability and colour consistency are the priority — decks, fencing, exposed wood that takes hard use — a semi-transparent or solid stain often makes more sense.

We'll make a specific recommendation on the site visit once we've seen the current condition of your wood and what you're trying to achieve. Our [wood restoration service page](/services/wood-restoration) has more on how we approach cedar projects across Whistler and Pemberton.`,
  },
  {
    slug: "cabinet-painting-vs-replacement",
    title: "Painting your cabinets vs. replacing them: an honest comparison",
    publishedAt: "2024-07-10",
    excerpt:
      "A cabinet refinish done right costs roughly 20–30% of a full replacement. Here's what the quality ceiling looks like, what it can't fix, and when replacement is the better call.",
    coverUrl: "/stock-images/tinted-coty2024-kitchen-1024x690.jpg",
    category: "Cabinet refinishing",
    content: `Cabinet painting has gotten a bad reputation — mostly because it's been done badly. Rollers leave texture, brush strokes show, the paint chips at edges within a year. Done right, a spray-applied cabinet refinish is hard to tell from factory.

## What refinishing can do

A proper refinish involves removing every door and drawer front, sanding or scuff-priming every surface, and applying two coats of a hardener-fortified cabinet paint (we typically use Benjamin Moore Advance, which cures to an extremely hard finish) via airless sprayer. The result is a smooth, consistent finish that's durable.

It can completely transform the look of a kitchen — turning dated oak or stained maple into a clean contemporary white or navy — at roughly 20–30% of what new cabinets would cost.

## What refinishing can't do

It can't fix damaged box structure, poor layout, inadequate storage, or cabinets that are genuinely worn out. If your boxes are falling apart, if the hinges have stripped the wood, or if you need to reconfigure the kitchen entirely, refinishing is a patch on a real problem.

## The honest answer

If your boxes are solid and your layout works, refinishing is almost always the right call economically. The quality ceiling is high — the limitation is the skill and equipment of the person doing it, not the process.

If you're already thinking about a full renovation, replacement makes sense. If you just want a kitchen that looks new, a proper refinish is hard to beat for the cost. More on how we run these projects on our [cabinet refinishing service page](/services/cabinet-refinishing).`,
  },
  {
    slug: "what-to-ask-a-painting-contractor",
    title: "6 questions to ask any painting contractor before you hire them",
    publishedAt: "2024-06-05",
    excerpt:
      "Most people ask for a price. The price is almost never the right question. Here's what to ask instead — and what the answers tell you.",
    coverUrl: "/stock-images/portfolio/alpenglow-painter-exterior-prep-whistler.jpg",
    category: "Advice",
    content: `Most homeowners compare painting quotes by price alone. That's how they end up with peeling exteriors, missed spots, and contractors who disappeared after the deposit.

Here's what to ask instead.

## 1. What products are you specifying, and why?

If they can't name a product and explain why it's appropriate for your surfaces, they're not thinking about your job — they're thinking about their margin.

## 2. What does your prep include?

Prep is the difference between a paint job that lasts 10 years and one that lasts 3. Ask specifically: do you sand before recoating? How do you handle peeling areas? Do you caulk all penetrations?

## 3. Who is on the crew — employees or subs?

Subcontracted crews are harder to quality-control and often disappear mid-project. Know who is actually showing up to your house.

## 4. What does your warranty cover, and how does it work in practice?

Ask directly: "If something peels in year 2, what happens?" A contractor who stands behind the work will answer simply. One who doesn't will hedge.

## 5. Can I see a project report from a previous job?

Most contractors have nothing to show. If you can review what they documented from a previous job, you'll learn a lot about how they think about their work.

## 6. What's your process for changes to scope?

On any job larger than a single room, something unexpected comes up. How do they handle it? The answer should be: they tell you before they do anything, and changes are documented in writing.

The answers to these questions tell you more than the price does. If you're comparing quotes in Whistler or the Sea to Sky right now, our [contact page](/contact) has the fastest way to get on our schedule for a site visit — there's no cost and no commitment to the quote.`,
  },
  {
    slug: "how-to-read-a-paint-quote",
    title: "How to read a painting quote (and spot the ones that will go sideways)",
    publishedAt: "2024-05-12",
    excerpt:
      "A low quote is easy to find. A quote that reflects what you'll actually pay — and what you'll actually get — is rarer. Here's what to look at.",
    coverUrl: "/stock-images/portfolio/alpenglow-painter-ladder-window-whistler.jpg",
    category: "Advice",
    content: `A painting quote should answer several questions before you sign anything. Most don't.

## What to look for

**Scope specificity.** Does it describe exactly what surfaces are included? "Paint exterior" is not enough. You want to know: siding, trim, fascia, soffits, doors, windows — what's in, what's out, and what the surface conditions are at each.

**Product names.** If the quote says "2 coats exterior paint" without naming the product, you don't know what you're getting. A $40/gallon paint and a $90/gallon paint are not the same.

**Prep details.** What surface preparation is included? Pressure washing, scraping, sanding, priming, caulking — which of these are in the price and to what standard?

**Timeline.** How long will the project take? How is weather handled for exterior work? A quote with no timeline is a contract with no accountability.

**Warranty terms.** What's covered, for how long, and under what conditions?

## Red flags

A very low quote that doesn't explain what it excludes. Every job has a cost floor. If someone is significantly below everyone else, something is being omitted — prep, product quality, or scope.

No written proposal. A verbal quote or a number written on a notepad is not a proposal. It has no scope, no terms, and no protection for you if the job goes sideways.

No mention of products. This usually means they'll use whatever is cheapest.

## What a good quote looks like

A written document with itemized scope, named products, timeline, and warranty terms. It should be specific enough that if you disputed something later, the document would settle it. Ours are presented in person or on a call — we don't just email a PDF and wait.

If you haven't already, [read our list of six questions to ask any painting contractor](/blog/what-to-ask-a-painting-contractor) before you sign — it pairs well with this one.`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];
  const sameCategory = POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === current.category,
  );
  const fill = POSTS.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category,
  );
  return [...sameCategory, ...fill].slice(0, limit);
}
