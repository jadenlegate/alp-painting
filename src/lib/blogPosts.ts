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
    slug: "exterior-painting-cost-whistler-2026",
    title: "How much does exterior painting cost in Whistler? Honest ranges for 2026",
    publishedAt: "2025-07-08",
    excerpt:
      "Exterior painting costs in the Sea to Sky are higher than the national averages you'll find online. Here's what you should actually budget for a Whistler exterior in 2026, broken down by home size and complexity.",
    coverUrl: "/stock-images/portfolio/exterior-repaint-finished-whistler.jpg",
    category: "Cost & hiring",
    content: `Every homeowner asking about exterior painting wants the number. The honest answer is that exterior painting in Whistler costs more than the average you'll find in a Google search, and the range is wide because the range of homes here is wide. A 1,800 sqft family home in Alta Vista and a 5,500 sqft chalet in Kadenwood are not comparable projects.

Here's what actually drives the cost, and what we see most Sea to Sky exterior quotes land at in 2026.

## What's in an exterior paint price

Roughly three things:

1. **Labour.** Typically 70–80% of the total. Exterior work is slow — it's scaffolding, moving equipment, masking, weather delays, access issues.
2. **Product.** Usually 10–15%. Premium exterior paint is about $90–110 per gallon; a large chalet uses 20–40 gallons. The product bill is real but not the biggest line.
3. **Overhead and contingency.** Insurance, WCB, vehicles, shop space, warranty reserve. 10–15%.

That breakdown varies, but not by a lot. A quote that's significantly lower than the range below has cut something out of it — usually prep or product tier.

## 2026 ranges for Whistler exteriors

These are ranges we see across Whistler, Pemberton, and Squamish for honestly-prepped, premium-product exterior projects. Numbers assume two-coat application on sound substrate:

- **Small family home, 1,500–2,000 sqft, single storey or 1.5 storey, simple siding:** $8,000–$14,000
- **Mid-size home, 2,000–3,000 sqft, two storey, mixed siding (stucco + wood trim, or Hardie + cedar accents):** $14,000–$24,000
- **Large chalet, 3,000–5,000 sqft, two or three storey, cedar-heavy:** $22,000–$42,000
- **Trophy home, 5,000+ sqft, complex exterior, significant scaffolding needs:** $40,000–$90,000+

These numbers include wash, prep, caulk, spot-prime, two finish coats on all surfaces, and a written warranty. They don't include major carpentry or rot repair, which we price separately after assessment.

## What drives you to the top or bottom of the range

The biggest variables, in roughly the order they affect price:

**Access and height.** A single-storey rancher is much cheaper to paint than a three-storey walk-out. Scaffolding, lift rental, and the slower pace of working at height all add cost.

**Cedar vs painted.** Cedar siding and timber restoration takes longer than painted surfaces. A chalet with a lot of natural cedar will price higher than a similar chalet with painted Hardie.

**Existing condition.** A home that was last painted 6 years ago with decent prep is a faster job than one that's been neglected for 15 years. The latter might need 40+ hours of additional scraping, priming, and carpentry repair before any finish coat goes on.

**Complexity.** Gable returns, dormers, turrets, wrap-around decks, mixed material changes — anything that slows down the work adds hours.

**Product tier.** The difference between a $60/gallon and a $95/gallon paint across a whole exterior is often $400–$600. Most of our clients choose premium — it's not the place to save.

**Timeline pressure.** If you need the job done in a specific three-week window in July, you're narrowing our crew's flexibility and pricing tends to move up accordingly.

## What a $10,000 quote for a $22,000 project is missing

When one quote is significantly lower than others, it's almost always one of these:

- Single-coat finish instead of two-coat.
- Cheaper paint specified but labeled "premium" without a product name.
- Prep listed generically with no commitment to sanding, scraping, priming.
- No caulk replacement.
- Crew that disappears at callback time.
- No written warranty.

A 25% discount on a proper project usually means 50–60% less actual work done. The finish fails early, and you pay again in 3–5 years. [Our guide to reading a paint quote](/blog/how-to-read-a-paint-quote) covers the specific line items to look at.

## How to actually budget

A reasonable approach if you're planning an exterior for 2026:

1. Measure your home's perimeter (roughly) and estimate square footage of exterior wall surface, not floor area. Google Maps measure tool is good enough.
2. Use $6–$10 per sqft of exterior wall surface as a rough planning number for the Sea to Sky.
3. Add 20% for homes with significant cedar, timber frame, or complex architecture.
4. Get two or three written proposals and compare scope before price.

We don't quote over the phone — exterior pricing without a site visit isn't a quote, it's a guess. A walk-around usually takes 20 minutes and tells us more than any square-footage calculation.

## Where to go from here

If you have a Sea to Sky exterior coming up and want a real proposal, [book a site visit](/contact). For context on how we think about exteriors in this climate, [our breakdown of what mountain exposure does to paint](/blog/exterior-painters-whistler-mountain-climate) is a useful read first.

If the price feels high, it's worth asking why paint jobs that last 10 years cost more than paint jobs that last 3. Usually the difference is in the labour and prep you're not seeing, and it's real.`,
  },
  {
    slug: "interior-painting-cost-whistler",
    title: "Interior painting cost breakdown for a Whistler home in 2026",
    publishedAt: "2025-06-25",
    excerpt:
      "Interior painting cost in Whistler runs about 30–50% higher than the Canadian average. Here's what the price covers, why it's higher here, and how to budget for different scopes of interior work.",
    coverUrl: "/stock-images/portfolio/master-bedroom-chalet-whistler.jpg",
    category: "Cost & hiring",
    content: `Interior painting in Whistler costs more than interior painting in most of the country. The product is the same. The difference is the labour market, the season pressure, and the standard of finish most Sea to Sky clients expect. A quick roller job isn't what most homeowners here are paying for. A careful, clean, well-cut interior repaint done to a high standard is what they want, and that's what the prices reflect.

Here's what you should actually budget for different interior scopes in 2026, and what moves the number up or down.

## 2026 ranges for Whistler interiors

Assuming two-coat application on walls, existing trim repaint, and all furniture protection:

- **Single room, 10x12, walls + trim + ceiling:** $900–$1,600
- **Single room, 14x18 with vaulted ceiling:** $1,400–$2,400
- **Whole 2-bedroom condo, walls + trim + ceilings:** $5,500–$9,000
- **Whole 3-bedroom family home, 2,000 sqft:** $9,000–$16,000
- **Whole 5-bedroom chalet with vaulted great room and wood detailing:** $18,000–$35,000+

Ranges widen with ceiling height, trim detail, and whether walls are ready for paint or need prep. A home with smooth-finish drywall is 25–30% cheaper to repaint than a home with heavy orange-peel or knockdown texture.

## What you're actually paying for

A proper interior project divides roughly into:

- **Protection and setup:** cover floors, move furniture, mask windows and hardware. Often underestimated — on a full-house repaint it's a day of work before any paint is opened.
- **Prep:** patch nail pops, fill cracks, sand patches flat, spot-prime. Quality of prep is the single biggest predictor of how long the job will look good.
- **Cutting in:** the slow, precise work at ceilings, trim, and corners. You can tell a careful painter from a fast one entirely by how their cut lines look.
- **Rolling walls:** the part everybody pictures when they think of painting, and the fastest part of the process.
- **Trim and doors:** a second pass with a different process. If re-coating oil-based trim, a bonding primer is required.
- **Final walk and touch-up:** every room checked under good light, every flaw flagged and fixed.

## Where costs go up

**Ceilings matter.** A flat 8-foot ceiling is one thing. A vaulted tongue-and-groove ceiling in a great room is a different project. Expect to pay $8–$14 per sqft of ceiling surface for T&G work, especially if any knot-sealing or colour change is involved.

**Trim condition.** If existing trim is oil-based and the client wants latex, every surface needs a bonding primer. That's a full additional coat on miles of trim. Adds 15–25% to trim labour.

**Colour changes.** Going from a light neutral to another light neutral is two coats. Going from dark to white might be three coats, sometimes four. Deep accent colours in saturated reds, teals, or forest greens often need three coats to hit full colour.

**Closets and details.** The places that didn't get painted last time. Most quotes from competitors assume closets are out of scope. Ours include them unless the client excludes them.

**Working around occupants.** An empty house is cheaper to paint than an occupied one. Not by a huge amount, but it's real.

## Where costs go down

If you want to bring the price down without compromising quality:

- **Paint fewer surfaces.** Walls only, keep existing trim and ceiling. Often cuts the price by 30–40%.
- **Stay in the same colour family.** Two coats of a similar shade cures faster and uses less product than a colour change.
- **Plan ahead.** Booking 3–4 months out gets you better rates than emergency-scheduled work in peak season.
- **Consolidate rooms.** Painting all the bedrooms at once is cheaper per room than doing them one at a time over a year.

## What a good interior quote looks like

A written quote specifying: rooms in scope, surfaces in scope per room (walls, trim, ceiling, closets, doors), colour count, products by name, approximate timeline, and warranty terms. Prep expectations should be in writing, not assumed. [Our guide to reading a painting quote](/blog/how-to-read-a-paint-quote) covers what to verify line by line.

## Common misconceptions

**"Painters just roll walls." ** They don't. Well under half the hours on any interior project are rolling walls. Most of the time goes to prep, protection, and trim.

**"One quote is the same as another."** Not even close. On a $10,000 job, we've seen competitor quotes ranging from $6,000 to $14,000 for what looks like the same scope. The difference is almost always the actual work being done.

**"I can DIY most of it."** You can paint one room on a weekend. You cannot paint a whole house in 40 hours, which is what a crew of two can knock out in about 4 days. The labour math is real.

## Where to start

If you're planning interior painting for a Whistler home, our [interior painting service page](/services/interior-painting) has the longer scope breakdown. [Book a walkthrough](/contact) and we'll get you a specific proposal within about a week. For context on how we approach the work itself, [this walkthrough of a proper interior project](/blog/interior-painting-whistler-what-to-expect) explains the process in more depth.`,
  },
  {
    slug: "painting-contractor-insurance-wcb-bc",
    title: "Painting contractor insurance and WCB in BC: what to actually verify before you hire",
    publishedAt: "2025-06-12",
    excerpt:
      "Most homeowners ask if a painter is 'insured' and take yes for an answer. That's not enough. Here's what to actually check on a BC painting contractor's insurance and WorkSafeBC coverage — and why it matters if something goes wrong on your property.",
    coverUrl: "/stock-images/portfolio/alpenglow-painter-ladder-window-whistler.jpg",
    category: "Cost & hiring",
    content: `A painter slips off a ladder on your property and breaks their wrist. Who pays for the hospital bill, the rehab, and the time off work?

If the painter is a WorkSafeBC-registered business with active coverage, WorkSafeBC does. If they're not, the answer can get complicated — and in some cases, as the property owner, you can end up partially on the hook. That's not a scenario most homeowners understand until it's actually happening.

This post walks through what insurance and WCB coverage a painting contractor in BC should actually have, how to verify it, and what the gaps look like.

## The two coverages that matter

Every legitimate painting contractor in British Columbia carries two separate forms of coverage:

**Commercial General Liability (CGL) insurance.** This covers damage the contractor causes to property or injury they cause to third parties. If a sprayer overspray drifts onto your neighbour's car, CGL handles it. If a ladder falls through your window, CGL handles it. Minimum useful coverage is $2M per occurrence. We carry $5M because we do commercial and strata work where the stakes are higher.

**WorkSafeBC (WCB) coverage.** This covers the painter themselves if they're injured on the job. It's mandatory for any business with employees in BC and strongly advised even for solo operators. If a painter falls off a ladder on your property, WCB is what pays their medical costs and lost income.

Both coverages are separate. A contractor can have one without the other. Ask specifically about each.

## What to verify, not just ask

"Are you insured?" is the wrong question. The right question is: "Can you send me the certificate of insurance and your WCB clearance letter?"

Both are documents, not verbal statements. They're easy to produce if the contractor has them, and they take about a business day to generate. If they can't produce them:

- The policy doesn't exist.
- The policy has lapsed.
- They don't know what you're asking for.

None of those are acceptable.

## What a CGL certificate of insurance shows

A certificate of insurance (COI) is a one-page document from the insurance company listing:

- The insured business name (make sure it matches the contractor you're hiring).
- The coverage limits (per occurrence and aggregate).
- The policy period (active dates).
- The insurer.
- Often: any additional insureds (you can often request to be named as additional insured for a big project).

Things to check on a COI:

- Is the business name on the COI the same business name on the contract?
- Is the policy currently active (not expired)?
- Is the per-occurrence limit at least $2M?
- Is the policy type "Commercial General Liability" and not "Personal Liability"?

If anything doesn't match, ask.

## What a WCB clearance letter shows

WorkSafeBC provides a clearance letter that confirms a business is in good standing and current on premiums. Anyone can request one for any BC business by their account number.

The letter shows:

- Business name.
- Classification (painting contractors fall under a specific code).
- Status (active and in good standing, vs. in arrears or inactive).
- Issue date and expiry.

Key thing: the clearance letter expires. An old clearance letter doesn't prove current coverage. Ask for one dated within the last 30 days.

If a contractor says "I'm WCB exempt because I'm a sole proprietor" — that's a choice some operators make, and it's legal in BC. But it means there's no WCB coverage if they're injured on your property. You want to understand that gap before hiring.

## Why this matters on your property

Three scenarios come up most often:

**Scenario 1: Painter slips and falls.** If WCB is active, WCB handles it, and the painter can't sue you for personal injury. If WCB isn't active, your homeowner's insurance may be on the hook for medical costs and lost wages. Some homeowner's policies exclude injuries to contractors.

**Scenario 2: Accidental property damage.** Painter knocks over an expensive piece of art. If CGL is active, it's claimed against the painter's policy. If not, you're chasing the contractor personally, and good luck if they don't have assets.

**Scenario 3: Overspray or runoff damage to a neighbour's property.** Neighbour's property damage is covered under CGL. Without it, it becomes your problem as the property where the work was being done.

None of these are rare. Property damage claims happen on painting jobs regularly. The insurance just handles it quietly.

## What we carry, for reference

So you have a comparison:

- **CGL**: $5M per occurrence, $10M aggregate.
- **WCB**: active, classified under 763002 (Painting Contractors), premiums current.
- **Additional**: named additional insureds on request for strata, commercial, and custom home builder projects.
- **Certificates**: available on request. We typically send them attached to the signed proposal.

Most legitimate contractors in Whistler carry something similar. The ones who don't are the ones you want to know about before hiring, not after.

## One more question worth asking

"What happens if something goes wrong?" is different from "are you insured?" A professional answer sounds like: "Here's the process, here's who you call, here's what my insurer will cover." An unprofessional answer sounds like: "Don't worry, nothing will go wrong."

Painting contracts in the Sea to Sky aren't risky in absolute terms, but the sites involve ladders, lifts, high elevations, and expensive homes. Stuff happens. The difference between a contractor who handles it and one who ghosts you when it does is mostly about what they put in place before anyone picked up a brush.

## Where to start

If you're lining up bids, ask every contractor for their COI and WCB clearance as part of the quote package. The professional ones will have them ready.

For a full list of what else to ask, [our six questions for any painting contractor](/blog/what-to-ask-a-painting-contractor) pairs well with this one. If you'd like our COI and WCB clearance, we include them with every signed proposal. [Reach out](/contact) to start.`,
  },
  {
    slug: "why-exterior-paint-fails-early-mountains",
    title: "Why exterior paint fails early in the mountains (and how we prevent it)",
    publishedAt: "2025-05-28",
    excerpt:
      "A paint job that lasts 8 years in Vancouver sometimes lasts 3 in Whistler. That's not a product problem. It's almost always an application and prep problem tied to mountain conditions. Here's what goes wrong, and how to avoid it.",
    coverUrl: "/stock-images/portfolio/chalet-bay-window-before-whistler.jpg",
    category: "Process",
    content: `We get called out to exteriors in Whistler that are peeling three, four, five years after their last repaint. The owner is frustrated because they paid for premium paint. Sometimes they still have the receipts. The product was fine. What went wrong is almost always upstream of the paint.

Here are the failure patterns we see most, and what prevents them.

## Failure 1: Paint applied too late in the season

Most common cause of early failure on Whistler exteriors.

Acrylic paints need a cure window above about 10°C for 24–48 hours after application. In Whistler, overnight temperatures dip below that threshold by the first or second week of October in most years. Paint applied in late September through October sometimes feels dry to the touch but hasn't fully coalesced — the polymer chains haven't finished cross-linking.

A partially-cured film is soft, has weaker adhesion, and is vulnerable to the first hard frost. The next spring, the homeowner sees peeling on south-facing surfaces that don't make sense for a 1-year-old coating.

**Prevention:** we don't book new exterior work past mid-September in most years. Any exception requires a weather window we can verify in advance.

## Failure 2: Prep cut short

The invisible failure mode. A contractor under time or money pressure cuts prep. You don't see it on day one — the finish looks great. Two years later, paint peels in sheets where it was applied over a chalky, dirty, or unprimed substrate.

What proper prep includes, and where shortcuts typically happen:

- **Pressure washing.** Easy to skip on parts of the exterior that "don't look dirty." They're dirty. UV and airborne silicates coat every surface over time. Unwashed surfaces develop chalk, which paint won't bond to.
- **Scraping and sanding failed areas.** Slow, tedious work. Often skipped on hard-to-reach areas like gable peaks.
- **Spot-priming bare wood.** Skipped when the finish coat is tinted dark enough to hide the bare spots visually.
- **Caulking.** Usually gets done on the visible front elevation and skipped on sides and back.

**Prevention:** we spec prep in writing, with photos of failed areas, before any finish coat goes on. Our crew documents prep in progress so we can show what was done.

## Failure 3: Too thick, applied too fast

A paint film that's too thick doesn't cure evenly. The surface skins over while the lower layers stay fluid. As the whole film tries to cure, you get cracking, wrinkling, or extremely slow drying. On exteriors, this usually shows up as cracking in the first year along caulked joints or thickly-built corners.

**Prevention:** we apply to spec. Most exterior acrylics want two coats at 4–5 mils wet per coat. Heavy application on a bad area doesn't fix the problem, it creates new ones.

## Failure 4: Coating over a failing substrate

If the wood beneath the paint is rotten, the paint film goes with it. You can prime and paint over soft wood, and it'll look great for a season. Then the wood continues to fail under the film and takes the paint with it.

**Prevention:** we probe suspect areas before prep. Anything that's spongy gets repaired or replaced (often through our [light carpentry service](/services/light-carpentry)) before paint is specified. If the rot is extensive, we pause and have the conversation with the owner about proper replacement.

## Failure 5: Wrong product for the substrate

An acrylic paint applied over an oil-based previous coat without a bonding primer will fail at the adhesion layer. A film-forming stain applied over cedar that's been treated with oil will not bond. A breathable stain applied over an impermeable film will trap moisture and peel.

**Prevention:** we test when we're not sure what's on the wall. A $3 bottle of solvent tells us whether existing paint is oil-based or latex. A simple water-drop test tells us whether cedar has been oiled. The product we spec matches what's already there.

## Failure 6: UV-inappropriate tint

Deep colours — rich reds, forest greens, strong browns — absorb far more UV than light colours. On south and west-facing walls at elevation, deep tints can fade visibly in 2–3 years in formulations not rated for high UV.

**Prevention:** on high-UV exposures with deep colours, we spec UV-rated formulations (Benjamin Moore Aura Exterior has a "Color Lock" line; Sherwin-Williams has "Emerald" with specific UV stabilizers). Light neutrals are more forgiving on south and west elevations.

## Failure 7: Missing the little things

Small details that individually look cosmetic but collectively cut years off a paint job:

- Gutter downspouts not disconnected from the wall during wash, trapping mud behind them.
- Nail heads not set flush and spot-primed, rusting through the finish within 18 months.
- Bare end grain on cut siding not sealed, wicking moisture behind the board.
- Hardware (hinges, brackets) painted over without removal, trapping corrosion.

**Prevention:** our project checklist catches these. Every exterior project has the same closeout inspection: walk the full perimeter with the owner, lighted torch in hand, looking at every detail.

## What failure looks like vs. normal wear

Normal wear on a well-done exterior: gradual chalking and UV fade over 7–10 years, usually worst on south and west faces. Touch-ups at year 5–6 extend life to 10–12 years.

Early failure: visible peeling at year 1–3. Cracking along caulk lines. Colour shift on non-south-facing surfaces. Paint coming off in sheets rather than flaking.

If you're seeing early failure on a recent paint job, it's worth a conversation. Sometimes it's warranty-recoverable. Sometimes the right answer is to plan a redo with someone who'll do it differently. Either way, it's diagnosable.

## Where to start

If you're noticing peeling, cracking, or colour shift on a paint job that's younger than 5 years, [book a site visit](/contact). We'll walk the exterior and tell you honestly what we see. For context on what we do differently, [our breakdown of exterior painting in the Sea to Sky](/blog/exterior-painters-whistler-mountain-climate) covers the full approach. Related reading: [the three environmental stressors that kill mountain paint](/blog/freeze-thaw-uv-condensation-mountain-paint-damage).`,
  },
  {
    slug: "rough-sawn-cedar-prep-whistler",
    title: "The right way to prep rough-sawn cedar in Whistler: what most painters skip",
    publishedAt: "2025-05-14",
    excerpt:
      "Rough-sawn cedar is unforgiving. The texture that makes it beautiful is the same texture that traps failing finish, dirt, and moisture. Here's how we actually prep it — and what separates a 3-year finish from a 7-year one.",
    coverUrl: "/stock-images/portfolio/cedar-ceiling-detail-whistler.jpg",
    category: "Process",
    content: `Rough-sawn cedar is the signature siding of mountain homes. It has character, it weathers naturally if you want it to, and it holds stain with a depth that smooth cedar can't match. It's also one of the most demanding substrates to refinish properly. The very texture that makes it beautiful traps previous finish, grit, and moisture. Prep on rough-sawn cedar is a skill, and cutting corners on it is the fastest way to turn a 7-year finish into a 3-year one.

Here's how we approach rough-sawn cedar prep on Sea to Sky exteriors, and what you should expect a contractor to do.

## Step one: read what's already on the wall

Before any tool touches the wood, we need to know what the existing finish is. On rough-sawn cedar, there are usually three possibilities:

- **Penetrating oil** (Cabot, Sikkens Cetol SRD, Armstrong-Clark). Doesn't film, weathers out rather than peels. Easier to recoat.
- **Film-forming stain** (semi-transparent or solid). Sits on the surface. Fails by peeling. Harder to recoat without removing failed areas.
- **Paint.** Uncommon on rough-sawn cedar but we see it. Typically peeling already.

A quick water-drop test and a solvent test tell us what we're dealing with. We write this into the proposal so the recoat plan matches the substrate.

## Step two: wash, but carefully

Pressure washing is where most rough-sawn cedar prep goes wrong. Too much pressure and you erode the soft summer wood, leaving ridges where the harder winter growth stands out. Too little pressure and you leave dirt trapped in the texture.

Our standard on rough-sawn cedar:

- 500–1,200 PSI with a 25–40 degree tip.
- Wand held at about 12–18 inches from the surface.
- Always working with the grain, never against.
- Start from the top, let runoff rinse lower sections.

We typically use a cedar brightener (like Benjamin Moore Restore, or a dedicated oxalic-acid-based cleaner) mixed into the wash. It removes greyed surface cells and tannin staining, returning the wood to a healthy colour before any finish goes on.

The wash has to be done at least 48 hours before any finish is applied. Wet cedar is darker than dry cedar, and a wall that looks ready isn't always ready.

## Step three: scrape and sand selectively

Where the existing finish is failing — peeling, checking, or heavily built up — we sand or scrape back to sound substrate. On rough-sawn cedar, "sound substrate" doesn't mean bare wood. It means wood that will hold the new coat.

Tools we use depending on the condition:

- **Carbide scrapers** for film-forming stains that are peeling in sheets. Fast, removes loose material without damaging wood.
- **Festool Rotex sanders with dust extraction** for broader areas that need to be feathered. We use 60–80 grit on rough-sawn cedar — anything finer smooths the texture we want to preserve.
- **Hand sanding** around trim, inside corners, and detail areas where power tools don't fit.

The crew's judgment on when to stop sanding matters. Sanding too aggressively destroys the rough-sawn character. Not sanding enough leaves failed finish that the new coat will fail with.

## Step four: spot-treat end grain and damage

Rough-sawn cedar has a lot of end grain at cut ends, under trim returns, and around penetrations. End grain wicks moisture 10x faster than face grain. It has to be sealed properly or moisture creeps behind the finish from the cut edges.

Before we stain or paint, we:

- Treat end grain with a penetrating end-grain sealer (Cabot makes a good one).
- Fill nail holes with an exterior-grade filler that takes stain.
- Repair small damaged areas with a cedar-compatible epoxy for larger damage, or let significant damage drive a carpentry replacement.

Nail heads that are proud of the surface get set flush and spot-primed. Rust bleeds through any finish within months if they're not.

## Step five: let the substrate acclimate

A freshly washed wall is wet. A wall we've just sanded has open grain. We give it 48–72 hours in dry conditions before any finish goes on. If weather doesn't cooperate, we wait. The cost of starting too early is a premature finish failure and we know exactly how that conversation goes with a homeowner.

## Step six: finish selection tied to the prep

The stain or paint we apply is chosen for the substrate we've prepped. For rough-sawn cedar in the Sea to Sky, we default to **Sikkens Cetol SRD Plus** (penetrating oil, flexes with the substrate, doesn't peel) or **Sansin ENS** (higher-film stain with strong UV performance) depending on the look the client wants.

What we don't do on rough-sawn cedar: solid film-forming paints unless specifically requested, in which case we have a longer conversation about maintenance expectations.

More on finish selection in [our post on oil vs stain for cedar](/blog/cedar-oil-vs-stain-which-is-right).

## What this takes in hours

Proper prep on a typical 2,500 sqft Whistler chalet with rough-sawn cedar siding takes roughly:

- 8–12 hours: wash and brighten.
- 20–40 hours: scrape, sand, repair.
- 4–6 hours: end-grain sealing and spot-priming.
- 4–8 hours: acclimation wait (no labour but schedule time).

That's 40–60 hours of prep before any finish goes on. On a three-week project, prep is roughly the first week and a half.

A contractor quoting the same project with 8–15 hours of prep isn't doing prep to the standard that produces a 7-year finish. They're doing prep to the standard that produces a 3-year one.

## Where to start

If you have a cedar home in the Sea to Sky coming up for a refinish, [book a site visit](/contact). Our [wood restoration service page](/services/wood-restoration) covers the longer service scope. For context on how mountain conditions drive the approach, [our breakdown of why paint fails early in the mountains](/blog/why-exterior-paint-fails-early-mountains) pairs with this post.`,
  },
  {
    slug: "freeze-thaw-uv-condensation-mountain-paint-damage",
    title: "Freeze-thaw, UV, and condensation: the three things that kill mountain paint",
    publishedAt: "2025-04-30",
    excerpt:
      "Exterior paint in the Sea to Sky fails from three stressors in roughly this order: UV, freeze-thaw, condensation. Here's what each one does, how to identify which is driving your failure, and how we design against all three.",
    coverUrl: "/stock-images/portfolio/dark-cedar-chalet-whistler.jpg",
    category: "Process",
    content: `Paint on a Sea to Sky exterior has three enemies. Understand what each does and how to fight it, and you understand most of why mountain paint jobs last as long (or as short) as they do.

In the order they typically cause the most damage: UV, freeze-thaw, and condensation. Every paint system we spec up here is designed to push back on all three.

## UV at elevation is the biggest driver

Ultraviolet light breaks down the polymer binders in paint over time. At elevation, UV dose is higher — about 10% more at 750 metres than at sea level, and meaningfully more again at 1,200 metres. Add a short but intense summer sun exposure and thin air, and Whistler exteriors take roughly 20–30% more UV per year than a comparable Vancouver home.

### What UV damage looks like

- **Chalking.** A powdery residue you can wipe off with your finger. Means the binder has degraded and is releasing the pigment.
- **Colour fade.** Reds, blues, and deep browns fade the fastest. White and light beige are nearly UV-proof.
- **Surface embrittlement.** Paint becomes less flexible, then cracks along caulk lines and substrate joints.

### How we design against it

- Specify UV-rated exterior coatings for south and west elevations (Benjamin Moore Aura Exterior with its Color Lock formula, Sherwin-Williams Emerald Exterior, Sikkens Cetol SRD Plus).
- Push clients gently toward lighter colours on high-UV walls when they have flexibility.
- Apply full two-coat film thickness — thin coats chalk faster.
- Schedule routine maintenance at 5–6 years, not waiting until year 10.

## Freeze-thaw stresses every joint

The Sea to Sky sees roughly 150–200 freeze-thaw cycles a year, depending on elevation. Each cycle the substrate beneath the paint expands and contracts. The paint film has to flex with it.

### What freeze-thaw damage looks like

- **Cracking along caulked joints.** Caulk shrinks in cold, the paint film bridging the caulk cracks when the joint opens.
- **Failure at material transitions.** Where cedar meets stucco, where wood meets metal flashing — the two substrates expand at different rates, and the paint film takes the difference.
- **Peeling around windows.** Condensation behind the glass combines with freeze-thaw at the frame to lift paint in strips.

### How we design against it

- Flexible, elastomeric caulks at all moving joints. We use Sherwin-Williams Loxon or OSI Quad depending on the joint type.
- Product selection biased toward flexible finishes rather than hard ones on areas with significant expansion potential.
- Film thickness controlled — thin coats flex better than heavy ones.
- Metal flashings and trim primed separately with a metal-specific primer before the finish coat.

## Condensation is the sneaky one

Condensation is the hardest of the three to identify because you usually can't see it. Moisture trapped behind a paint film from inside the wall — from interior humidity, from snow melt, from ground moisture — will eventually find a way out. If the paint film isn't breathable enough, it pushes off the substrate.

### Where condensation damage shows up

- **Peeling on the lower 18 inches of a wall** where ground moisture wicks up through the siding.
- **Cedar that's black behind the paint** on shaded north-facing walls — trapped moisture plus fungal growth.
- **Paint lifting under eaves and soffits** where condensed moisture runs down from the roof deck.
- **Blistering in summer** — moisture in the substrate heats up, vaporizes, lifts the paint.

### How we design against it

- Use breathable finishes where appropriate (penetrating oils on cedar, acrylics designed for "permeance").
- Ensure the substrate is dry before finish is applied — moisture meter readings below 15% on wood before any coat.
- Identify and address source: flashing that's diverting water into the wall, gutters that dump runoff against siding, ground grading that sends water toward the foundation.
- Communicate with clients when the actual problem is above our scope (roof leak, interior humidity) rather than painting over it.

## How to tell which one is driving your failure

Walking an exterior that's failing, the failure pattern tells you which stressor is dominant:

- **Uniform chalking, worst on south/west faces:** UV. Re-coat with a UV-rated product.
- **Cracking at caulk joints, nowhere else:** Freeze-thaw. Recaulk with flexible sealant and re-coat.
- **Peeling at the bottom of walls or under eaves:** Condensation. Fix the source first.
- **Peeling with blackened wood behind it:** Condensation plus fungal growth. Address the moisture source and treat the wood before repainting.
- **Random peeling unrelated to exposure:** Usually a prep failure from the last paint job, not an environmental issue.

Most exteriors we see are hit by all three to some degree. The question is which is dominant, and that drives the repair approach.

## Why this matters

A painting contractor who doesn't think about these three stressors is specifying products and prep that aren't appropriate for where the paint is going. The result is a perfectly adequate Vancouver-grade paint job that fails early in the mountains. The owner blames the paint. The paint was fine. The spec was wrong for the location.

We've been painting in the Sea to Sky long enough to have strong opinions about what works and what doesn't. Most of our spec choices are driven by one of these three stressors.

## Where to start

If your exterior is showing early failure, a site visit lets us identify which stressor is driving it. [Get in touch](/contact) for a walkthrough. For context on how we prevent failure on new projects, [our post on why exterior paint fails early in the mountains](/blog/why-exterior-paint-fails-early-mountains) covers the prep side. Related: [how long exterior paint should actually last in Whistler](/blog/how-long-does-exterior-paint-last-whistler).`,
  },
  {
    slug: "sikkens-benjamin-moore-sherwin-williams-whistler-exterior",
    title: "Sikkens vs Benjamin Moore vs Sherwin-Williams for Whistler exteriors",
    publishedAt: "2025-04-15",
    excerpt:
      "The three product lines we actually use on Sea to Sky exteriors, where each one wins, and where we'd pick another. A real comparison from a painter who specs all three.",
    coverUrl: "/stock-images/portfolio/cedar-fascia-finished-whistler.jpg",
    category: "Exterior",
    content: `A homeowner comparing exterior paint in Whistler usually ends up looking at three manufacturers: Sikkens, Benjamin Moore, and Sherwin-Williams. All three make genuinely good products. The question isn't which is "best" — it's which is best for your specific wall.

We spec all three on different jobs. Here's how we actually choose between them.

## Sikkens — the cedar and timber specialist

**Where it wins:** Rough-sawn cedar, timber-frame members, cedar shakes, fir beams. Anywhere we want a penetrating product that flexes with the wood and doesn't form a hard film.

**Top product we use:** Cetol SRD Plus. Goes on like an oil, penetrates, leaves a low-sheen finish. Maintenance is a clean-and-recoat every 3–4 years — no stripping.

**Where we don't reach for Sikkens:** Painted surfaces (they don't really compete in that category), smooth wood that a client wants to look sprayed or mirror-smooth, modern white/pastel finishes on cedar (the warm tones of Cetol shift colour perception).

**What it costs:** Cetol SRD Plus is roughly $85–95 per gallon. Coverage on rough-sawn cedar is lower than on smooth — about 150–200 sqft per gallon instead of 300. Budget accordingly.

## Benjamin Moore — our go-to for painted exteriors and trim

**Where it wins:** Painted exteriors (Hardie, smooth cedar that's going white, stucco), trim work, doors. The Aura Exterior line has excellent UV resistance with their Color Lock formulation, and Advance is our default for cabinet and trim applications.

**Top products we use:**

- Aura Exterior (flat, low lustre, satin) — premium exterior painted surfaces, excellent UV.
- Regal Select Exterior — tier down from Aura, solid choice for most residential exteriors where deep dark colours aren't a concern.
- Arborcoat Solid — when a client wants a solid stain over cedar with paint-like colour consistency.
- Advance Waterborne Alkyd — interior trim and exterior doors where we want a level, hard finish.

**Where we don't reach for Benjamin Moore:** Rough-sawn cedar that a client wants to remain looking natural (Sikkens does this better). High-wear industrial applications (Sherwin has specific tiers for this).

**What it costs:** Aura Exterior runs about $85–100 per gallon. Regal Select Exterior is $65–75.

## Sherwin-Williams — the one with the widest tier depth

**Where it wins:** Clients who want to match to a specific Sherwin fan (designer-specified colours), commercial and strata projects where Sherwin's contractor programs and documentation are cleaner, and jobs that need the Emerald Urethane line for its hardness.

**Top products we use:**

- Duration Exterior — comparable tier to BM Regal Select, excellent broad-use exterior.
- Emerald Exterior — top-tier, with specific UV stabilizers.
- Emerald Urethane Trim Enamel — the hardest interior trim finish we use, excellent for cabinet boxes.
- SuperDeck Transparent Stain — decent mid-tier cedar product.

**Where we don't reach for Sherwin-Williams:** Rough-sawn cedar restoration (Sikkens penetrates better). Some of their mid-tier products don't hold up as well at high elevation — we stick to Emerald or Duration, not the lower tiers.

**What it costs:** Duration is $80–90 per gallon. Emerald is $95–110.

## A sample spec: our decisions on a typical Whistler chalet

To make the comparison concrete, here's how we'd split products on a 3,200 sqft Whistler chalet with rough-sawn cedar siding, painted Hardie trim, and a covered deck with timber posts:

- **Rough-sawn cedar siding:** Sikkens Cetol SRD Plus, semi-transparent tint matched to existing.
- **Timber posts and beams:** Sikkens Cetol SRD Plus, same tint as siding.
- **Covered deck T&G ceiling:** Sikkens Cetol HLS Plus (higher film stain, better for surfaces that won't see direct rain).
- **Painted Hardie trim and fascia:** Benjamin Moore Aura Exterior, colour matched to client's selection.
- **Painted exterior doors:** Benjamin Moore Advance in the door colour.
- **Metal railings or flashings:** Sherwin-Williams DTM Acrylic after a rust-inhibitive primer.

Three brands on one project. Each picked for what it does best on that specific surface.

## What we don't recommend

**House-brand paints** (Home Depot, Rona). The retail tier products from the big-box stores use different formulations than the contractor-tier products from the same manufacturer. They're fine for a DIY small project. They don't hold up as long on a full exterior in the Sea to Sky.

**Store-brand paints** (Behr, Olympic). Same issue. The premium tiers of these brands are mid-tier at best in the contractor paint world.

**Deep discounts or warehouse specials.** If a contractor is specifying a paint they bought on clearance, the warranty on that paint may be void. Real contractor programs get dealer-direct shipping with full warranty support.

## Picking without over-thinking

Most homeowners don't need to understand all of this. The practical advice is:

1. Ask your contractor which specific products they're specifying and why.
2. Verify they're current manufacturer products (not discontinued or re-formulated).
3. Check that they match the substrate (penetrating product on cedar, film product on Hardie).
4. Look at the warranty on the product tier they're using.

If your contractor can explain their product choice and it matches the above, you're in good hands regardless of which brand it is.

## Where to go from here

If you want the specific product recommendations for your home, [book a site visit](/contact). A walkthrough with the siding in front of us produces a tighter recommendation than a general article can. More on how we think about product selection in [our post on premium paint](/blog/premium-paint-worth-it). Related: [oil vs stain for cedar](/blog/cedar-oil-vs-stain-which-is-right).`,
  },
  {
    slug: "solid-vs-semi-transparent-stain-cedar",
    title: "Solid vs semi-transparent stain for cedar: when each one actually makes sense",
    publishedAt: "2025-04-02",
    excerpt:
      "Solid stain gives you colour consistency and UV protection. Semi-transparent preserves wood grain and fails more gracefully. The right answer depends on what you want to see and what you want to maintain. Here's how we decide.",
    coverUrl: "/stock-images/portfolio/stained-cedar-exterior-whistler.jpg",
    category: "Wood restoration",
    content: `Most cedar homes in the Sea to Sky eventually face the choice: stay with a semi-transparent stain that shows the grain, or step up to a solid stain that covers it. Both are legitimate. Both have trade-offs. The "right" answer depends on what the client wants to see and what maintenance they're willing to live with.

Here's how we walk through the choice with homeowners.

## What each one is doing

**Semi-transparent stains** (Sikkens Cetol SRD Plus, Cabot Australian Timber Oil, Armstrong-Clark, Sansin DEC) let the wood grain show through. The pigment is suspended in an oil or low-film acrylic carrier that penetrates into the surface. UV protection comes from the pigment load, which is moderate.

**Solid stains** (Benjamin Moore Arborcoat Solid, Sherwin-Williams SuperDeck Solid, Sikkens Rubbol Solid) cover the grain completely. They behave more like paint — they form a film on the surface and rely on pigment to block UV entirely. Colour consistency is nearly perfect.

## The case for semi-transparent

You'd pick semi-transparent when:

- You want the cedar to still look like cedar. The grain, the knots, the character of the wood is the look you're after.
- The cedar is new or in excellent condition. Heavily weathered cedar doesn't look great under semi-transparent — the surface damage shows through.
- You're willing to recoat every 3–4 years with a clean-and-recoat process (no stripping).
- You're on a covered or partly-covered elevation. Full south-facing exposure chews through semi-transparent faster.

Semi-transparent fails gracefully. When it's time to recoat, you wash, brighten, and apply another coat. No scraping, no peeling, no major prep.

## The case for solid

You'd pick solid when:

- You want colour consistency. Solid stains match across boards, across elevations, across different cedar grades.
- Your cedar is older or shows significant weathering. Solid covers surface damage that semi-transparent would highlight.
- You want longer intervals between maintenance — 5–8 years instead of 3–4.
- You're shifting the home's colour direction. Going from natural cedar to a dark navy or deep brown is a solid-stain job.

Solid fails less gracefully. When it eventually peels (and it will, in year 7 or 8), the prep to recoat is closer to a full paint prep — scraping, sanding, priming.

## The hybrid some clients don't know exists

There's a middle tier: **semi-solid stain** (Benjamin Moore Arborcoat Semi-Solid, Cabot Semi-Solid). It obscures the grain more than semi-transparent but less than full solid. You see texture but not clear grain. Good for cedar that's a bit too weathered for clean semi-transparent but the client doesn't want to commit to full solid.

We don't spec semi-solid often but it's the right answer on maybe 1 in 15 projects.

## What actually happens at maintenance time

This is where the real cost difference shows up.

**Semi-transparent maintenance cycle:** Year 4, we wash and brighten the cedar, let it dry, apply one coat of the same stain. One day of wash, one day of dry, one day of apply. Cost is roughly $2,000–$4,000 on a typical home. Finish looks fresh for another 3–4 years.

**Solid maintenance cycle:** Year 7–8, we identify peeling areas, scrape and sand them, feather-sand the transitions, spot-prime bare wood, apply two coats over the full surface. Multiple days of prep, multiple days of application. Cost is roughly $6,000–$12,000 on the same home. Finish looks fresh for another 7–8 years.

Over a 15-year window, the totals often come out similar. Semi-transparent has more frequent, lower-cost touches. Solid has less frequent, higher-cost reapplications.

## The aesthetic question most homeowners don't verbalize

Cedar with semi-transparent stain looks like cedar. Cedar with solid stain looks like painted wood. They are meaningfully different aesthetic directions.

If you want a cabin or chalet look that emphasizes the wood, you're going semi-transparent (or in some cases, pure oil with no pigment). If you want a home that reads as designed architecture with cedar as a texture rather than a focal point, solid stain often fits better.

We've done both on similar-sized homes across Whistler. Neither is wrong. It's about what you want the home to say.

## When we'd recommend paint instead of either

If a client wants a full colour change to white, or a very light colour generally, we often steer away from both stains and toward a proper painted finish (Benjamin Moore Aura Exterior, Sherwin-Williams Emerald). The solid stain light-colour products work but paint performs better on white and near-white exteriors.

If a client wants a deep, saturated colour (dark navy, forest green, black), solid stain or Arborcoat Solid often makes more sense than paint.

This is a conversation we have on the site visit, not in the abstract.

## Recommendations by exposure

Rough framework we use when talking through options:

- **Fully covered elevations (deep porches, under roof overhangs):** Semi-transparent or oil. The substrate isn't taking much weather.
- **North-facing elevations:** Semi-transparent works. Low UV, low fade.
- **South or west-facing elevations with cedar you want to keep natural-looking:** Semi-transparent, expect 3-year maintenance.
- **South or west-facing elevations where colour consistency matters:** Solid or paint.
- **Old cedar that's been through multiple refinish cycles already:** Often solid is the right call — the wood isn't going to look clean under semi-transparent anymore.

## Where to start

If you're planning cedar refinish for your Sea to Sky home, [book a site visit](/contact). The specific recommendation depends on what we see on your walls. For more on the overall oil vs stain question, [our detailed walkthrough is here](/blog/cedar-oil-vs-stain-which-is-right). Our [wood restoration service page](/services/wood-restoration) covers the full scope.`,
  },
  {
    slug: "oil-based-vs-water-based-wood-finishes-mountain",
    title: "Oil-based vs water-based wood finishes in mountain climates",
    publishedAt: "2025-03-18",
    excerpt:
      "The oil-vs-water question on wood finishes matters more in the Sea to Sky than in most of Canada. Here's how each performs in mountain conditions, where we still reach for oil, and where water-based has earned its place.",
    coverUrl: "/stock-images/portfolio/pine-ceiling-covered-deck-whistler.jpg",
    category: "Wood restoration",
    content: `For most of the last 40 years, oil-based stains were the default on cedar and fir exteriors in the Sea to Sky. They penetrate deep, flex well with freeze-thaw, and have a long track record in mountain conditions. Waterborne alternatives have closed the gap over the last decade and are now our first choice on many projects — but not all of them.

Here's how we think about the oil vs water question on wood finishes in Whistler, Pemberton, and Squamish.

## What "oil-based" actually means now

Most of what was sold as "oil-based stain" 20 years ago was straight alkyd oil carried in mineral spirits. That formulation is increasingly restricted by VOC regulations. What's labelled "oil-based" today is often a lower-VOC alkyd or a modified oil — still oil-based in behaviour, but reformulated to meet regulations.

Products still effectively oil-based that we use:

- **Sikkens Cetol SRD Plus** (technically low-VOC oil-modified alkyd).
- **Armstrong-Clark oil-based stains** (high-solids oil, excellent penetration).
- **Cabot Australian Timber Oil** (alkyd-based, tinted oil).
- **TWP 1500** (oil-based, popular on deck projects).

## What water-based has become

Modern waterborne wood finishes are not what they were 15 years ago. The polymer chemistry has caught up. Products worth specifying today include:

- **Sansin ENS** (water-based alkyd emulsion, performs like an oil).
- **Sikkens Cetol Filter 7 Plus (water-based version)** — decent for UV exposure, lower odour.
- **Benjamin Moore Arborcoat (both semi-transparent and solid)** — waterborne, hybrid polymer tech.
- **PPG ProLuxe RE/CF** — waterborne, specific application scenarios.

## Where oil still wins in the mountains

Three scenarios where we still reach for oil first:

**1. Heavily weathered rough-sawn cedar that's never been finished.**

Oil penetrates deep into the surface cells of bare rough-sawn cedar, getting into places water-based products sit on top of. On a 15-year-old neglected cedar exterior we're bringing back, oil typically performs better for the first 2–3 years.

**2. Substrates with high oil content already in them (old oil-treated timbers, old-growth cedar).**

Water-based products sometimes don't bond well over decades of existing oil. The test is simple — water beads on the surface instead of soaking in. When we see that, we switch back to oil-based to maintain compatibility.

**3. Timber-frame members with exposed end grain.**

End grain drinks whatever we put on it. Oil soaks in deep and stays. Water-based can wick too far through the end grain and cause colour inconsistency near the cuts.

## Where water-based has earned its place

**1. Light-coloured finishes on cedar.**

Oil yellows over time. A clear oil on cedar shifts warmer and more amber as it ages. A waterborne finish stays truer to the applied colour. If a client wants a "weathered grey" or a clean natural look, water-based is almost always better.

**2. Covered surfaces and interior wood.**

Interior T&G ceilings, protected soffits, carriage house exteriors — water-based products work great here and have much lower odour profiles, which matters on occupied homes.

**3. High-traffic areas where clean lines matter.**

Water-based finishes can be overcoated in 2–4 hours. Oil-based often needs 12–24 hours between coats. On a fast-turn project where we need to move the crew to the next elevation, water-based is more practical.

**4. Commercial and strata projects.**

Multi-unit buildings usually require VOC documentation. Water-based products make the paperwork easier and keep residents less impacted by odour.

## The performance gap is mostly gone

If you asked us this question in 2010, we'd have said oil-based products were clearly better on nearly every exterior in the Sea to Sky. That's no longer true. The waterborne products have closed the gap on UV resistance, flexibility, and film integrity.

What hasn't fully closed:

- Penetration depth on bare rough-sawn cedar (oil still wins).
- Amber warmth on cedar (oil wins if you want it, loses if you don't).
- Ease of recoatability (water-based slightly better).

## A specific side-by-side we've watched

On one of our repeat clients in Creekside, we've maintained two adjacent cedar exteriors — one with Sikkens Cetol SRD Plus (oil-modified), one with Sansin ENS (water-based alkyd emulsion). Both applied in the same year, same elevation, same exposure. Seven years in:

- Oil-based has kept more of its original warmth but shows slightly more UV fade on the south face.
- Water-based has kept its colour more uniformly but is slightly less penetrated into the substrate.
- Both held up. Neither has failed. Both needed a refresh at year 4 on the south face.

The functional difference between the two over seven years is small. The aesthetic difference is visible but subtle.

## What we recommend today

For most Sea to Sky cedar projects in 2026, we default to:

- Rough-sawn cedar siding: oil-modified (Sikkens Cetol SRD Plus) or water-based alkyd (Sansin ENS), depending on what's already on the wall.
- Smooth cedar deck boards: oil-based (Armstrong-Clark or Cabot) for penetration.
- Timber-frame posts and beams: oil-modified for colour and depth.
- Covered T&G ceilings: water-based (lower odour, faster recoat).
- Painted cedar: water-based acrylic always (Benjamin Moore Aura Exterior, Sherwin-Williams Emerald).

The specific choice on a specific wall is always driven by substrate condition, existing finish, and aesthetic direction.

## Where to start

If you're deciding between oil and water-based for an upcoming project, [book a site visit](/contact). The substrate tells us more than any general principle. Related reading: [oil vs stain for cedar](/blog/cedar-oil-vs-stain-which-is-right), [solid vs semi-transparent](/blog/solid-vs-semi-transparent-stain-cedar).`,
  },
  {
    slug: "spar-urethane-marine-varnish-penetrating-oil-interior-wood",
    title: "Spar urethane, marine varnish, or penetrating oil: finishing interior wood",
    publishedAt: "2025-03-04",
    excerpt:
      "When finishing interior wood — vaulted T&G ceilings, timber frames, feature walls — the product you pick shapes the look more than the wood does. Here's what spar urethane, marine varnish, and penetrating oils each actually do.",
    coverUrl: "/stock-images/portfolio/cedar-ceiling-detail-whistler.jpg",
    category: "Interior",
    content: `Most Whistler chalets have a lot of interior wood — tongue-and-groove ceilings, timber-frame members, cedar feature walls, fir beams. The product used to finish that wood shapes the entire feel of the space more than the wood species does. A cedar ceiling finished in clear spar urethane looks different, reflects light differently, and ages differently than the same ceiling finished in a penetrating oil.

Here's what each product category is doing and when we reach for it.

## Spar urethane — the high-film, high-protection default

**What it does:** Forms a hard, glossy film on the surface of the wood. Highly resistant to moisture, UV, and general wear. The name comes from its original use on ship spars.

**Where it makes sense:**
- High-humidity areas (bathrooms, mudrooms) where moisture protection matters.
- Window sills and surfaces that see sunlight through glass.
- Wood that needs to be wiped clean regularly.
- Clients who want a glossy, "finished furniture" look.

**Brands we use:** Minwax Helmsman (the hardware-store standard, fine for smaller projects), General Finishes Exterior 450 (better build quality), Sikkens Cetol 7 (higher-end, for premium applications).

**Trade-offs:** High film means visible brush strokes if not applied well. Builds up in corners. Needs sanding between coats on proper builds (usually 3–4 thin coats with 220-grit sanding between). Ambers over time, especially in sunlight.

**What the finished wood looks like:** Shiny, amber-toned, rich depth. Reads as "finished" rather than "natural."

## Marine varnish — the spar urethane's heavier cousin

**What it does:** Very similar to spar urethane but with even higher film build and more UV protection. Originally formulated for boat exteriors that need to withstand saltwater and sustained sun.

**Where it makes sense:**
- Large-format features where we want maximum protection (grand entrance doors, decorative wood around skylights, wine cellar doors).
- Wood that's going to see significant UV through interior glazing (south-facing T&G ceilings with skylights).
- Client wants the highest possible gloss and protection on a feature surface.

**Brands we use:** Epifanes Clear Gloss Marine (high-end, used on yachts), Pettit Z-Spar Captain's Varnish (commercial-grade).

**Trade-offs:** Significantly more expensive than spar urethane. More demanding application — needs warm, dust-free conditions and long between-coat times. Over-application causes blushing. Rarely the right call for bulk applications like a whole cedar ceiling.

**What the finished wood looks like:** Deep, glass-like, amber, with serious surface depth. Reads as "premium yacht" rather than "cabin."

## Penetrating oils — the matte, natural-looking option

**What it does:** Soaks into the wood rather than forming a surface film. No build-up, no gloss, no plasticky feel. The wood still looks and feels like wood.

**Where it makes sense:**
- Large-area applications where a film finish would feel wrong (a 2,000 sqft T&G ceiling in a great room).
- Rough-sawn cedar feature walls where texture is the whole point.
- Timber-frame posts and beams where the character of the wood should be foreground.
- Clients who want a "cabin" or "lodge" aesthetic rather than a "finished furniture" one.

**Brands we use:** Rubio Monocoat (Belgian, single-coat finish, extensive colour palette), Sansin SDF (waterborne penetrating oil, low-odour), Osmo Polyx-Oil (hardwax oil, excellent for floors too).

**Trade-offs:** Less UV and moisture protection than film finishes. Requires refresh every 5–10 years depending on exposure and use. Colour depth is lower than a high-film product.

**What the finished wood looks like:** Natural, matte, textured. The wood is fully visible without a plastic-like coating.

## A typical whole-home spec

On a 4,500 sqft Whistler chalet with significant interior wood, we might spec:

- **Great room T&G ceiling (cedar):** Rubio Monocoat in natural tone. Matte, long-lasting, minimal odour.
- **Timber-frame posts and beams (fir):** Sansin SDF natural. Preserves character.
- **Dining room wall (cedar feature wall):** Rubio Monocoat or unfinished — client's call based on aesthetic.
- **Mudroom bench and cubbies (maple):** General Finishes Exterior 450 satin — wiped-clean hard finish.
- **Powder room ceiling (T&G cedar with humidity exposure):** Sikkens Cetol 7 satin — film finish for moisture protection.
- **Entry door (cedar, south-facing with glazing):** Epifanes Clear Gloss Marine — premium protection.

Five different products on one home, each matched to what that specific surface needs.

## What most other painters do

Most painters default to spar urethane for everything interior. It's available at every paint store, it's reasonably forgiving, and the clients generally like the look. That's fine for a small project.

Where it goes wrong: applying three coats of spar urethane on a 2,000 sqft T&G ceiling produces a plasticky, over-finished look that doesn't fit most chalet aesthetics. And it's extremely difficult to maintain. A penetrating oil is less work now and less work in 10 years.

## The aesthetic question, again

This comes up in almost every consultation. The homeowner says "I want the wood to look natural." That rules out heavy spar urethane and marine varnish. They usually end up with a penetrating oil.

Or the homeowner says "I want it to look finished and last forever without maintenance." That points at spar urethane or marine varnish.

Or — most commonly — they say "I don't know, what do you recommend?" At which point we look at the light in the room, the amount of wood, the architectural style, and the use pattern, and recommend accordingly.

## Where to start

If you're planning interior wood finishing for a Sea to Sky home, [book a site visit](/contact). The recommendation depends heavily on seeing the wood in its actual lighting. For context on interior painting more broadly, [our post on interior painting in Whistler](/blog/interior-painting-whistler-what-to-expect) covers the full service scope.`,
  },
  {
    slug: "premium-paint-worth-it",
    title: "Premium paint is worth it — but only on these surfaces",
    publishedAt: "2025-02-20",
    excerpt:
      "Every contractor tells you to buy the best paint. Sometimes they're right. Sometimes they're upselling. Here's where premium paint actually earns its price in a Sea to Sky home, and where mid-tier is perfectly fine.",
    coverUrl: "/stock-images/portfolio/finished-interior-chandelier-whistler.jpg",
    category: "Cost & hiring",
    content: `"Premium paint lasts longer." Every contractor says it, including us. It's also not a blanket truth. Premium paint costs about 30–60% more than mid-tier contractor paint. On some surfaces, that premium earns itself back many times over. On others, it's money spent where the result is indistinguishable.

Here's where we actually spec premium paint, where we'd recommend mid-tier, and where it genuinely doesn't matter.

## Where premium paint matters most

### 1. Exterior surfaces with high UV

South and west-facing exterior walls, trim, and fascia in the Sea to Sky. These surfaces see sustained UV for hundreds of hours per summer. The binder in the paint has to resist UV breakdown or the finish chalks, fades, and fails.

Premium paints have upgraded binder chemistry — Aura Exterior's Color Lock, Sherwin Emerald's specific UV stabilizers — that mid-tier paints don't have. The gap shows up in year 3–5, when the mid-tier paint starts looking tired on the south face while the premium still looks fresh.

**Worth it?** Yes, very clearly. The $400–600 extra on a full exterior gets you 2–3 additional years of service life.

### 2. High-traffic interior surfaces

Kitchens, mudrooms, kids' rooms, and hallways. Surfaces that get touched, scrubbed, splashed, and scuffed.

Premium interior paints (Benjamin Moore Aura, Sherwin Emerald) have binders that allow the paint to be scrubbed hard without marking. Mid-tier paints scrub off — literally, you end up with a lighter patch where a mark was cleaned.

**Worth it?** Yes, on the specific rooms that see wear. Not necessarily worth it on a guest bedroom or formal dining room that rarely gets touched.

### 3. Cabinets and trim

The places you look at closely every day. Cabinet doors, door and window trim, baseboards. Every defect is visible. Premium paints level better (fewer brush marks), have fewer pigment variations, and cure harder.

**Worth it?** Yes. The product cost is a tiny fraction of cabinet or trim labour cost. The finish quality gap is significant.

### 4. Dark and saturated colours

Deep reds, rich blues, forest greens, true blacks. Saturated colours need more pigment and better binders to hit full colour and stay there.

Mid-tier paints in deep colours often need 3–4 coats instead of 2, and they fade faster. Premium paints nail it in 2 coats and hold the colour.

**Worth it?** Yes. The extra labour of additional coats usually exceeds the product savings.

## Where mid-tier paint is perfectly fine

### 1. Low-traffic interior walls in neutral colours

Bedroom walls in beige, off-white, light grey. They're not getting touched much, UV exposure is minimal (interior windows don't transmit much), and nobody's going to scrub them regularly.

Benjamin Moore Regal Select, Sherwin ProClassic — these are excellent mid-tier products that perform beautifully on low-traffic neutral walls. Premium overspec here doesn't show.

**Worth it to upgrade?** Rarely. Save the budget for surfaces that earn it.

### 2. Ceilings

Flat white ceilings in bedrooms and living rooms. They're not touched, they're not in high UV, they don't see scuff. A decent contractor-grade ceiling paint (Benjamin Moore Ben Ceiling, Sherwin ProMar Ceiling) performs indistinguishably from a premium ceiling paint on 95% of projects.

**Worth it?** No. Ceiling paint is a category where mid-tier is the right call.

### 3. Closets

A closet interior repainted in a standard white will look identical whether it's Aura or a mid-tier product. Nobody's evaluating closet paint.

**Worth it?** No.

### 4. Garage walls and outbuildings

Functional surfaces where the priority is "painted" rather than "flawless." Mid-tier serves here.

**Worth it?** No, generally. Unless the garage is a high-use workshop where scuff resistance matters.

## Where it honestly doesn't matter

**Temporary rentals and flip houses.** If the paint is going to be repainted by the next owner within 2–3 years anyway, premium paint's 8–10 year advantage is irrelevant.

**Surfaces slated for replacement soon.** Don't paint a wall you're planning to remove next year in premium paint.

**Quick colour tests or sample panels.** Mid-tier samples are fine.

## What we actually spec on a typical Whistler interior

On a 3,000 sqft family home interior repaint, our typical product breakdown:

- **Kitchen, mudroom, bathrooms, hallways:** Benjamin Moore Aura (premium). Scrubbability matters.
- **Kids' rooms:** Benjamin Moore Aura matte (premium). Kids.
- **Living room, bedrooms:** Benjamin Moore Regal Select (mid-tier). Adequate.
- **Ceilings throughout:** Benjamin Moore Ben Ceiling (mid-tier). Fine.
- **Trim and doors:** Benjamin Moore Advance (premium). Finish quality is the whole point.
- **Closets:** Whatever wall paint is left over (mid-tier or premium). Doesn't matter.

Premium paint on about 40–50% of the surfaces. Mid-tier on the rest. The blended cost is about 15% higher than all-mid-tier, not 50% higher.

## The contractor conversation to have

Ask your contractor which products they're specifying for which surfaces and why. The good answer is a mix — premium for the surfaces that earn it, mid-tier for the ones that don't. The bad answer is all-premium with no differentiation (upselling) or all-mid-tier regardless of surface (corner-cutting).

Either extreme is a signal.

## Where to start

If you're planning an interior or exterior and want to understand the product spec, [book a walkthrough](/contact). We'll talk through our spec line by line — what we're using where and why. For context on how product quality ties into overall cost, [our exterior painting cost breakdown](/blog/exterior-painting-cost-whistler-2026) and [interior painting cost breakdown](/blog/interior-painting-cost-whistler) cover the full picture.`,
  },
  {
    slug: "when-to-paint-exterior-whistler-month-by-month",
    title: "When to paint your exterior in Whistler: month by month",
    publishedAt: "2025-02-06",
    excerpt:
      "Exterior painting in the Sea to Sky has a reliable window (June through mid-September) and a wider grey-zone either side of it. Here's what each month is actually good for, and when to avoid painting outside.",
    coverUrl: "/stock-images/portfolio/stained-cedar-exterior-whistler.jpg",
    category: "Seasonal",
    content: `Exterior painting in Whistler has a real weather window. Most modern acrylic paints and stains need air temperatures above about 10°C for 24–48 hours after application, and they really want sustained dry weather to cure properly. In the Sea to Sky, that gives us a reliable summer window, with spring and fall shoulders that work if you watch the forecast.

Here's what each month looks like, and when we'll actually book exterior work.

## January, February, March

Not happening. Temperatures are reliably below cure thresholds, snow is on the ground, homes are winterized. We don't book exterior work in these months.

What's useful in winter:

- Planning and scoping for summer projects. We book much of our summer exterior calendar between January and March.
- Interior projects — [kitchens](/services/cabinet-refinishing), [living areas](/services/interior-painting) — are at their best in winter when owners are home more and outdoor distractions are fewer.
- Winter colour consultations are productive because we can see how a home's colours relate to the snow-dominated landscape around it.

## April

Transitional. Daytime temperatures in the Sea to Sky reach 10°C reliably by mid-April in most years, but overnight lows still dip into the 0–5°C range. Substrates are often still cold from winter even when the air has warmed.

What works:
- Sheltered south-facing walls, mid-day work only.
- Small touch-up projects where the weather window matters less.
- Prep work — pressure washing, carpentry repair, caulking — can start in April. The paint itself waits.

What doesn't:
- Full exterior projects. Too much weather risk.
- North-facing elevations (never quite warm enough).
- Stains on wood with remaining moisture from snow melt.

We occasionally book April projects, but always with a written caveat about weather contingencies.

## May

The real start of the season. First two weeks are still shoulder-ish; mid-May onward is mostly reliable.

What we typically do in May:

- Start major exterior projects after May 15, weather permitting.
- Prep work for June starts (washing, scraping, spot carpentry).
- Deck staining, which wants warmer wood.
- Crew schedules fill up fast — most of our May slots are booked by late March.

Still watch for: late snow events, particularly at elevation. A May snowstorm can knock a project off for 3–4 days.

## June

Prime season. Temperatures are reliable, humidity is moderate, precipitation is low to moderate. Our most efficient production weeks are usually in June.

What's good in June:
- Every type of exterior project.
- Full-house cedar restorations that need several consecutive dry days.
- High-elevation projects (Kadenwood, Emerald Estates) where May was still too cold.

What to watch: mid-June occasionally gets a "June-uary" cold snap that drops temperatures for a few days. We keep an eye on the forecast and work around it.

## July

Peak season. Our calendar is fullest, the weather is reliable, the days are long (we can work later in the evening when it stays warm and light). Most of the year's exterior production happens in July and early August.

What's good in July:
- All projects.
- Long projects that need weather consistency.
- Commercial and strata projects that can't tolerate delays.

What to watch:
- Bookings fill up. If you want July, you need to be in the conversation by February.
- Midsummer heat — we shift to earlier starts to avoid peak afternoon heat on south-facing elevations.
- Forest fire smoke. In smoky years, air quality and visibility can disrupt work for days at a time.

## August

Still solid. Similar to July conditions, occasionally a bit drier. Evening temperatures start to cool in the second half of August but daytime is still reliably paint-appropriate.

What's good in August:
- Continuing the big projects started in June and July.
- Fall shoulder-season bookings that want to be done before weather turns.

What to watch:
- The last 10 days of August start showing fall signals. We begin tightening up end-of-season timelines.

## September

The last productive month. First two weeks are excellent, last two weeks are increasingly risky.

What we still do in September:
- Finish projects we've been working on.
- Smaller, time-limited projects (single elevation, deck restains).
- Interior work begins ramping up as clients return from summer.

What we don't:
- Start new large exterior projects. The weather window is too narrow to guarantee completion.

Our hard stop for new large exterior work is usually around September 15. Past that, we've seen too many projects get caught in early fall weather.

## October, November, December

Too risky. Overnight temperatures below cure thresholds, precipitation frequent, substrates often cold even during daytime highs.

What works:
- Nothing major. Interior work is what we do.
- Occasional sheltered patches of small exterior touch-up under a roof overhang on a warm October day. Exceptions, not plans.

What we don't do:
- Start a full exterior in October "because it'll be fine." It won't be fine. [Why exterior paint fails early in the mountains](/blog/why-exterior-paint-fails-early-mountains) covers the late-season failure pattern in detail.

## Planning around the window

A practical calendar for a Sea to Sky homeowner thinking about an exterior:

- **Previous September through January:** Plan, gather references.
- **February through March:** Get quotes, finalize contractor.
- **April:** Contract signed, deposit placed. Order any custom colour matches (3-week lead times aren't uncommon).
- **May through mid-September:** Project executed.
- **Late September:** Touch-ups and closeout.

If you wait until April to start getting quotes, you're competing for the last remaining August or September slots. Most quality contractors' prime season is booked by early April.

## Where to start

If you want to get on our calendar for summer 2026, now is the time to start the conversation. [Reach out](/contact) and we'll set up a site visit on your schedule. Related: [our breakdown of what mountain conditions do to paint](/blog/exterior-painters-whistler-mountain-climate), which explains why the seasonal window matters so much.`,
  },
  {
    slug: "painting-in-winter-sea-to-sky",
    title: "Painting in winter in the Sea to Sky: what's actually possible",
    publishedAt: "2025-01-22",
    excerpt:
      "Winter is the wrong time for exterior work in Whistler, but the right time for most interior projects. Here's what's actually achievable between November and April, and what's worth waiting on.",
    coverUrl: "/stock-images/portfolio/finished-interior-chandelier-whistler.jpg",
    category: "Seasonal",
    content: `The question comes up every November: "Can you still paint in winter?" The answer depends on whether we're talking about the inside of your house or the outside, and whether we're in January or a mild February. Here's what we actually take on during Sea to Sky winters, and what we steer clients away from.

## Exterior in winter: almost never

The physics are against us. Modern acrylic paints need temperatures above about 10°C for 24–48 hours after application to cure properly. In Whistler between mid-October and mid-April, we're lucky to see three or four days in a row that meet that threshold, and even those days have cold overnight lows that slow or halt the cure.

What can fail on an exterior paint job done in winter conditions:

- **Incomplete cure.** Paint feels dry but hasn't cross-linked fully. Adhesion is compromised.
- **Blushing.** Moisture condensing on partially-cured film turns clear finishes cloudy.
- **Frost damage.** A freeze within the first 24–48 hours of application can crack the film invisibly. Failure shows up in the following summer.
- **Poor penetration on stains.** Cold wood doesn't absorb oil or water-based stains properly.

We've been asked to patch exteriors done by other contractors in late fall. It's usually cheaper to redo than to try to salvage.

### The rare exception

A sunny, dry mid-February day on a sheltered south-facing wall can sometimes support small touch-up work if the substrate is warm and the product is formulated for low-temp application. Emphasis on all three conditions. If a client has a specific small area that needs emergency attention, we'll look at it. We don't schedule it.

## Interior in winter: often the best time

Most of our interior work happens between November and April. Homeowners are home more. The house isn't being distracted by summer chores. The crew isn't stretched thin by exterior projects.

### What works beautifully in winter

**Whole-house interior repaints.** We can move through a home room by room without weather pressure. Most of our longer interior projects (5-plus rooms) happen in December, January, and February.

**Cabinet refinishing.** The off-site spray portion of a cabinet refinish is unaffected by outdoor conditions. We run our shop spray all winter. Reinstallation happens on a day that suits the client's schedule.

**Trim work.** Trim projects are often taken on between exterior seasons. We can dedicate time to getting every door, window, and baseboard done properly.

**Interior wood finishing.** Tongue-and-groove ceilings, timber-frame finishing, feature walls. Winter is the best time for these — low humidity, controlled indoor environment.

**Ceiling work.** Hard to do in summer when owners are using rooms. Easy in winter when rooms are available.

### One winter-specific consideration

Interior paint still has a curing preference for moderate humidity (40–60% RH). Winter air in the Sea to Sky can be very dry — sometimes 20% RH or below when the heat is cranked up. Paint dries fast but levels less well in dry air. We humidify the workspace for trim and cabinet work when needed (small portable humidifiers, or just leaving a kettle of water on the stove for bigger rooms).

## Prep work that can happen in winter

Even when we can't apply paint outside, some exterior prep can start:

- **Carpentry repairs.** Replacing rotten boards, fixing trim, patching stucco. Most of this can be done on a dry January day.
- **Consultation and planning.** Site visits for summer projects. We can't start the paint, but we can do the walkthrough, write the proposal, and lock the summer slot.
- **Pressure washing** can sometimes be done in late winter/early spring to get ahead of a May start.

For summer projects, the right time to engage us is January through March. Our summer calendar fills up by April.

## What winter lets us do well that summer doesn't

A few projects that genuinely benefit from winter scheduling:

**Colour testing.** You can live with sample swatches on the wall for weeks in winter without feeling like you're wasting painting season. We encourage it. Two or three samples on each wall for a week tells you more than picking from a fan.

**Slower, pickier work.** On a fussy colour change (navy to white, say) that needs three coats and perfect leveling, winter gives us the time to do it right. Summer is production mode.

**Complex projects.** The ones where we're working around clients' schedules, making lots of small decisions, adjusting as we go. Winter pace suits these.

## What to avoid

**Exterior emergency work.** If something is visibly peeling and you want it addressed now, the right answer is usually to patch with plastic or temporary sealant and schedule the proper repair for spring. An emergency winter patch job rarely lasts.

**Exterior stain in winter.** Oil-based stains applied cold don't penetrate. Water-based stains can freeze in the can before they even go on the wall.

**Spraying exterior doors in the garage.** Not enough ventilation, not enough temperature control. Doors that need spray finishing come to our shop.

## Planning the next summer from mid-winter

Our typical winter conversations with clients:

- November–December: early interest in summer exterior work. Site visits happen.
- January–February: proposals finalized, deposits placed. Spring prep scheduled.
- March: finalize colour selections, order custom colours if needed.
- April: start of the season, exterior work begins for flexible first projects.
- May–September: heart of the season.

Clients who reach out in May or June looking for a same-summer exterior are often pushed to August or later, or to the following year. The prime slots belong to homeowners who started the conversation in January.

## Where to start

If you have interior work you want done this winter, [reach out](/contact) — we have capacity most winter weeks. If you're planning a summer exterior, starting the conversation now means you get your pick of the calendar. Related: [our month-by-month guide to exterior painting in Whistler](/blog/when-to-paint-exterior-whistler-month-by-month) and [spring prep for mountain homes](/blog/spring-prep-mountain-homes-painting-season).`,
  },
  {
    slug: "spring-prep-mountain-homes-painting-season",
    title: "Spring prep: what mountain homes need before painting season starts",
    publishedAt: "2025-01-08",
    excerpt:
      "March and April are the shoulder weeks where Sea to Sky homes come out of winter and reveal what the season has done to them. Here's what to check on your home before the painting crew shows up — and what prep you can get ahead of.",
    coverUrl: "/stock-images/portfolio/cedar-chalet-exterior-whistler.jpg",
    category: "Seasonal",
    content: `Every spring we walk homes that look fine from a distance and reveal themselves up close. Snow has just come off, the substrate is drying out, and the damage from the winter is becoming visible. This is the right time to audit a home's exterior before the painting season starts — whether you're planning a repaint or just wanting to catch small issues before they become big ones.

Here's what we look at, and what you can check yourself.

## Walk the perimeter when the snow recedes

The first dry week in March or April is the best time to audit. Walk the full perimeter of the home, slowly, looking at each elevation. You're looking for:

- **Peeling paint or stain.** Small at first, especially around trim and caulk joints. Document location and extent.
- **Soft or spongy wood.** Press on trim boards, fascia, deck boards. Anywhere that gives under a firm press is the start of rot.
- **Cracked or missing caulk.** Especially at window and door surrounds, corner boards, and where different materials meet.
- **Separated trim.** Nails backing out, boards that have pulled away from the wall even slightly.
- **Staining or dark patches on siding.** Tannin bleed, mildew, or moisture damage.
- **Damaged flashing.** Bent, pulled away, or showing rust.
- **Gutter condition.** Pulled away from the fascia? Sagging? Full of debris? All of these push water into the wall.

Take photos. Even if you're not repainting this year, they're useful for comparison in future seasons.

## What winter damage usually looks like

Four patterns we see most years:

**Peeling along the bottom edge of siding boards.** Snow has sat against the wall for months, and the lower 4–8 inches of each board got too wet too many times. The finish gives up first.

**Cracked caulk at horizontal trim joints.** Caulk shrinks in cold, expands in warmth. Joints that were fine in October are split in April.

**Rotten board ends.** The ends of siding and trim boards are end-grain. Moisture wicks in. A full season of moisture exposure can turn a board end into sponge.

**Blackened wood behind peeling paint.** Fungal growth where moisture was trapped. This is a sign the paint was sealing in moisture rather than keeping it out.

Not every home has all of these. Most Whistler homes have at least two by the time they're 6–8 years out from their last paint.

## What you can do yourself before the crew arrives

A few prep tasks you can knock out in March or April that save time on the actual paint project:

- **Trim back plants.** Any shrub, tree branch, or vine within 2 feet of the house should be trimmed back. It's easier for us to paint when we're not fighting landscaping, and the plants will rebound.
- **Clean gutters and downspouts.** Runoff during the actual paint project is a real factor. Clean gutters mean controlled runoff.
- **Remove or move outdoor furniture and decorations.** Decks, patios, and walkways need to be clear.
- **Photograph existing condition.** For insurance records and for your own reference.

What not to do yourself unless you know what you're doing:

- **Don't pressure-wash.** Too much pressure on rough cedar or stucco does damage. Leave this to the paint crew.
- **Don't scrape.** Uneven scraping creates a substrate the paint crew has to re-prep anyway.
- **Don't caulk.** Bad caulking is worse than no caulking. Use the wrong product and the paint crew has to remove it before they can work.

Basically: do the yard work, leave the paint prep.

## What we look for on a spring site visit

When we come out in spring to quote a summer project, we're evaluating:

- **Overall condition.** Roughly where is this home in its paint lifecycle?
- **Priority areas.** Which elevations or surfaces need attention most urgently?
- **Hidden issues.** Probing trim for rot, checking flashing, looking at the condition behind downspouts.
- **Scope creep risk.** Are there carpentry repairs that need to happen before paint? How extensive?
- **Timing flexibility.** Is this a project that can wait for mid-summer, or does it need to start at the first available window?

The output of the walkthrough is a written proposal with a scope that reflects what we actually saw. No ballpark numbers over the phone.

## Budgeting for what winter uncovered

A home that's been neglected for 10+ years will often have carpentry repairs that change the budget. Rotten fascia, failing trim, cracked siding boards. These aren't painting work — they're [light carpentry](/services/light-carpentry) work that has to happen before painting can.

A rough framework:

- **Well-maintained 6-8 year cycle home:** Carpentry is minimal or zero. Budget is for paint only.
- **10+ year cycle home:** Expect 5–15% of the paint cost in carpentry repair. Sometimes more.
- **15+ year neglected home:** Carpentry can approach or exceed the paint cost. We'd stage the project: carpentry first, then paint.

We price carpentry separately in the proposal so you can see the split.

## The calendar advantage of early planning

Spring prep and planning gives you access to prime summer slots. By the time most homeowners call (late May), our July calendar is typically full. The homeowners who get our July slots are the ones who walked their home in March, called us in early April, and signed the proposal by the end of the month.

It's not urgency marketing. It's just how a small contractor's calendar works.

## Where to start

If you want us to do the spring walkthrough on your home, [get in touch](/contact). We do these from March through early May, free of charge, whether or not you end up booking with us. Related reading: [our month-by-month painting calendar](/blog/when-to-paint-exterior-whistler-month-by-month), [how long exterior paint should last](/blog/how-long-does-exterior-paint-last-whistler).`,
  },
  {
    slug: "re-staining-deck-whistler-timing",
    title: "Re-staining your deck in Whistler: timing, warning signs, and product picks",
    publishedAt: "2024-12-18",
    excerpt:
      "Most Sea to Sky decks need re-staining every 2–3 years, not the 5–7 the product label suggests. Here's how to tell when yours is due, what product to put on, and how to time the work around weather and deck use.",
    coverUrl: "/stock-images/portfolio/pine-ceiling-covered-deck-whistler.jpg",
    category: "Wood restoration",
    content: `Deck stain has a harder job than any other exterior finish on a home. It takes direct UV, constant foot traffic, snow sitting on it for months, spilled drinks, sunscreen, barbecue grease, and freeze-thaw cycles more aggressive than most walls ever see. Products advertised as "5-year deck stain" are rating themselves under conditions a Whistler deck doesn't share. Real maintenance intervals up here are shorter.

Here's how we think about deck re-staining in the Sea to Sky.

## How to tell when your deck is due

Four signs, in roughly the order they appear:

**Water beading has stopped.** Drip water on the deck boards. If it soaks in rather than beading, the finish has broken down. This usually happens 18 months to 3 years after the last coat, depending on exposure.

**Colour is fading visibly on the sun-exposed boards.** The south-facing half of the deck is 2–3 shades lighter than the shaded half. The stain is still sort of doing its job but the UV protection is weakening.

**Surface feels rough.** Running a hand along the boards catches on the grain. The top cells of the wood are starting to open up because the finish is no longer protecting them.

**You can see grey patches.** Grey means the wood is bare. The finish has given up in those spots. If you wait past this stage, you're into restoration rather than maintenance.

Most Whistler decks I walk show signs 1 and 2 at about the 2-year mark and sign 3 at about 3 years. By year 4, sign 4 is visible and the work required to refresh is more substantial.

## What happens if you wait too long

A deck that's been let go for 5–6 years without maintenance is typically at the point where:

- Some boards have cupped or split and need replacement.
- Surface wood is grey and rough across most of the deck.
- Fasteners may be proud of the surface (shifting through freeze-thaw).
- End grain is significantly degraded.

At this point, the project is partly carpentry and partly full restoration. Cost runs 2–3x what a 2-year refresh would have.

## Product picks for Sea to Sky decks

We use different products depending on wood type and client preference:

**For cedar decks:**
- **Armstrong-Clark Oil-Based Semi-Transparent.** Our default for most cedar decks. Penetrates deep, ages gracefully, easy to recoat.
- **Sikkens Cetol DEK.** When we want a slightly higher film build for a deck that sees less maintenance attention.
- **Sansin DEC.** Waterborne alternative with excellent UV, good penetration for its category.

**For pressure-treated decks:**
- **Benjamin Moore Arborcoat Semi-Transparent.** Reliable on PT, holds colour.
- **Cabot Semi-Solid.** When PT has aged enough that grain is no longer attractive and we're hiding it a bit.

**For hardwood decks (ipe, cumaru, garapa):**
- **Messmer's UV Plus for Hardwoods.** Specifically formulated for dense tropical species.
- **Penofin Hardwood Formula.** Alternative. Same category.

Products we don't recommend on Sea to Sky decks:

- **High-film solid stains on flat deck boards.** They peel under freeze-thaw and UV. Fine on railings, terrible on boards.
- **Paint.** Never. Don't paint a deck.
- **Hardware-store no-name stains.** Fine for a garden shed. Not fine for a deck that takes real weather.

## Timing the work

Decks want dry, warm conditions for application. Ideally:

- Wood moisture below 15% (we test with a moisture meter).
- Air temperature 12°C or higher.
- No rain in the forecast for 48 hours after application.
- Deck not scheduled for heavy use for 72 hours.

The productive window in Whistler is roughly June through mid-September, with May and late September as shoulder. A deck that needs restaining in April or October is usually better served by waiting for the right conditions.

Some clients want us to refresh a deck in May so they can use it all summer. We'll push back if the wood is still cold or wet. Rushing a deck stain produces a finish that fails in the first winter.

## Prep on a deck re-stain

If the deck is still in good shape and just needs a refresh:

1. Clear everything off the deck.
2. Clean with a cedar brightener or deck wash.
3. Rinse thoroughly.
4. Let dry for at least 48 hours.
5. Lightly sand any rough areas.
6. Apply stain per manufacturer's instructions — usually one wet-on-wet coat on vertical surfaces, two on horizontal boards.

Total time: 2–3 days including dry time.

If the deck has been neglected and needs restoration:

1. All of the above, plus:
2. Aggressive cleaning with a proper deck stripper if there's a failing previous finish.
3. Full sanding to open the grain.
4. Fill gaps, replace damaged boards.
5. Re-caulk penetrations.
6. Possibly two coats of penetrating stain.

Total time: 4–7 days depending on condition.

## Why our deck maintenance clients often keep us on a schedule

A lot of our repeat clients put their deck on a 2-year maintenance schedule with us. Every other spring, we come out, wash the deck, and apply a maintenance coat. It's not a big project — typically half a day on most residential decks — and the result is a deck that always looks good and never drifts into restoration territory.

Cost on a typical mid-size deck: $500–$1,200 for a 2-year maintenance cycle. Compare that to $2,500–$5,000 for a full 5-year restoration, and the math of maintenance vs let-it-go is clear.

## Signs the deck should be replaced, not re-stained

Sometimes the right answer isn't more stain. Indicators:

- More than 25% of boards are cupped, split, or soft.
- Railings are structurally loose.
- Fasteners are popping out of most boards.
- Substructure (joists) shows visible rot.

At that point, you're looking at a rebuild. We'd stain the new deck after it's built.

## Where to start

If your deck is showing any of the four warning signs above, [book a site visit](/contact). We'll tell you honestly whether it needs a refresh, a full restoration, or replacement. Related: [our overall wood restoration approach](/services/wood-restoration), [solid vs semi-transparent stain](/blog/solid-vs-semi-transparent-stain-cedar).`,
  },
  {
    slug: "how-to-maintain-exterior-paint-whistler",
    title: "How to maintain your exterior paint between repaints",
    publishedAt: "2024-11-30",
    excerpt:
      "A well-done exterior paint job lasts longest when it's looked after, not ignored. Here's a maintenance approach that adds 3–5 years to a Sea to Sky paint job — most of it doesn't involve a paintbrush.",
    coverUrl: "/stock-images/portfolio/exterior-repaint-finished-whistler.jpg",
    category: "Process",
    content: `The homeowner who gets 12 years out of an exterior paint job and the homeowner who gets 7 years out of the same job often paid the same money and used the same products. The difference is maintenance. Not major work — just a few specific habits that catch small issues before they become full repaint triggers.

Here's what we recommend to every client after their project is finished.

## The annual walkthrough

Every spring, walk the exterior the way we walk it on a quote visit. Look at:

- **South and west elevations first.** UV-driven failures start here.
- **Horizontal surfaces.** Tops of trim, fascia, railings, window sills. Water pools.
- **Caulk joints.** Especially around windows and at horizontal-to-vertical material transitions.
- **Fastener heads.** Nails, screws. If they're rusting, the rust is about to bleed through the finish.
- **Around gutters and downspouts.** Wet areas that rarely dry.
- **Anywhere vegetation is touching the wall.** Branches rubbing = finish damage.

Photograph anything that looks off. Year-over-year comparison photos tell you whether something is changing fast or slow.

## What you can handle yourself

A few tasks homeowners can do that meaningfully extend paint life:

**Wash the exterior annually.** Not pressure-washing — a gentle hose rinse with a soft brush on a long handle. Removes airborne grit, pollen, sap, and bug debris that accelerate finish breakdown. An hour a year on a typical home.

**Trim back vegetation.** Any branch or vine that's within 2 feet of the house, especially if it touches when wind blows. Contact wear removes finish in specific spots.

**Keep gutters clean.** Overflow during heavy rain pushes water into the wall behind the gutter, where it saturates the underlying wood and lifts the finish. Clean twice a year minimum.

**Fix minor caulk cracks before they get bad.** A tube of exterior-grade flexible caulk (Big Stretch, OSI Quad) costs $10. Squeezing fresh caulk into a cracked joint takes five minutes and prevents water from getting into the wall.

**Wipe down high-touch areas.** Exterior doors, the area around mailboxes, the inside of covered porches. These accumulate grime faster than the rest of the exterior and show it.

## What we handle on a 3–4 year touch-up visit

A lot of our long-term clients have us come out every 3–4 years for a half-day touch-up visit. Not a full repaint. Just:

- Inspect the full perimeter with a real painter's eye.
- Re-caulk any failing joints.
- Spot-prime and touch-up any small areas of failing finish.
- Re-treat end grain on exposed cuts if needed.
- Re-coat the worst 10% of surfaces (usually south-facing trim).

Cost is typically $500–$1,500 depending on home size and what we find. Results:

- The finish continues looking consistent, not aged.
- Small failures stay small.
- The next full repaint happens later — sometimes years later.

## What not to do

**Don't ignore peeling.** A nickel-sized peel in June becomes a fist-sized one by October. Peeling spreads, it doesn't heal. The earlier you catch it, the cheaper the fix.

**Don't power-wash aggressively.** This is different from a gentle wash. Full-pressure power washing degrades cedar, stucco, and older paint films. It also forces water behind siding. Leave real pressure washing to the next paint project.

**Don't paint over a problem.** A wet area, a failing substrate, a rusting nail — fix the underlying issue before putting paint over it. Paint over rust just means the rust is still rusting, hidden.

**Don't use the wrong touch-up paint.** If your previous contractor left labelled touch-up paint, use that. If not, the closest colour match from the store is rarely close enough. A touch-up spot that's slightly off colour is more visible than the original blemish was.

**Don't assume your warranty covers everything.** Warranties usually cover product failure and adhesion failure due to application — not UV fade, not wear, not damage from external sources. Read the specific terms of yours. [Our warranty page explains ours](/warranty).

## Sign up for a maintenance schedule

Some of our clients just have us on their calendar. Every 3–4 years, we come out for the touch-up visit without them having to remember to call. It's a low-key way to keep a home looking great for 15+ years between major repaints.

We offer this as a service. If you want it, we'll note it when your project finishes and reach out when the time comes.

## A realistic lifetime

With proper maintenance on a well-done job in the Sea to Sky:

- **Premium product + proper prep + maintenance:** 12–15 years between full repaints.
- **Premium product + proper prep + no maintenance:** 8–10 years.
- **Mid-tier product + proper prep + no maintenance:** 6–8 years.
- **Any product + poor prep:** 3–5 years, sometimes sooner.

The maintenance gap is real. A $3,000 touch-up visit every few years extends a $25,000 exterior by multiple years and keeps the home looking fresh throughout.

## Where to start

If your exterior was painted by someone else and you want a maintenance assessment, [book a walkthrough](/contact). For context on how we prevent failures on new projects, [our post on why exterior paint fails early](/blog/why-exterior-paint-fails-early-mountains) covers the prep-side reasons, and [our month-by-month calendar](/blog/when-to-paint-exterior-whistler-month-by-month) covers timing considerations.`,
  },
  {
    slug: "painting-over-knots-tannin-bleed-softwoods",
    title: "Painting over knotty pine, cedar, and softwoods: tannin bleed and how to stop it",
    publishedAt: "2024-11-15",
    excerpt:
      "Painting over cedar, pine, or fir and ending up with brown or yellow stains coming through the paint a week later? It's tannin bleed. Here's what's happening and how we actually block it.",
    coverUrl: "/stock-images/portfolio/interior-painting-in-progress-whistler.jpg",
    category: "Process",
    content: `A client calls us a week after their interior paint project is done. The freshly painted white cedar ceiling has yellow-brown streaks and rings appearing through the paint. It looks terrible, and the homeowner's first thought is that the paint is defective. It isn't. What they're looking at is tannin bleed, and it's completely predictable — and preventable — if the contractor plans for it.

This post explains what tannin bleed is, which woods it affects, and how we actually block it on Whistler projects.

## What's happening at the chemistry level

Cedar, redwood, pine, fir, and a few other softwoods contain natural water-soluble extractives — tannins, resins, and oils that the tree produced to resist rot and insects while it was alive. These extractives are still in the wood years after it's milled into siding or trim.

When you apply a water-based paint over these woods, the water in the paint re-dissolves the extractives. As the paint dries, the extractives are pulled to the surface with the evaporating water. They end up sitting in the cured paint film — as brown, yellow, or reddish stains.

It's not the paint failing. It's the wood leaking through the paint.

## Which surfaces need tannin blocking

Every softwood surface being painted for the first time, and many being repainted. Worst offenders:

- **Western red cedar.** The champion tannin leaker. Knots especially.
- **Redwood.** Comparable to cedar.
- **Knotty pine.** Knots bleed dramatically. Clear pine boards less so.
- **Douglas fir.** Bleeds at knots and around structural features.
- **Hemlock.** Moderate bleed, mostly at knots.

Oak, maple, and most hardwoods don't have this problem. The resin content is different.

## How to block tannin properly

There's exactly one reliable method: a purpose-built stain-blocking primer applied to the wood before any finish coat.

**Zinsser BIN** is the industry standard. A shellac-based primer, extremely fast drying, blocks nearly any water-soluble stain. Smells strong while wet. We use this on interior projects constantly.

**Zinsser Cover Stain** (oil-based) — comparable performance, easier to tint, more forgiving application. Slightly lower blocking power than BIN but handles most cases.

**Zinsser Smart Prime** (waterborne) — a newer category. Better than standard water-based primers, not as bulletproof as BIN or Cover Stain. Works on moderate tannin situations.

What doesn't work:

- **Standard waterborne primer.** Tannin leaks right through.
- **Standard paint without primer.** Worst outcome.
- **Paint-and-primer-in-one.** These are fine on previously-painted surfaces but not on bare softwood.

## Our process on a cedar ceiling going white

Step by step, how we handle a rough-sawn cedar T&G ceiling that a client wants painted white:

1. Clean the surface (vacuum and wipe down).
2. Sand any gloss or previous finish lightly.
3. Spot-prime all visible knots with BIN using a small brush — full, not thin coats. Let dry.
4. Full-prime the entire ceiling with BIN or Zinsser Cover Stain using a roller and brush for cuts.
5. Let dry overnight at least.
6. Check for bleed-through. If any knot is still showing through the primer, spot-re-prime.
7. Apply the first finish coat (usually Benjamin Moore Aura or Regal Select in the ceiling colour).
8. Let cure per manufacturer spec.
9. Apply the second finish coat.

Skipping step 3 is where most tannin failures happen. A contractor who primes once with a standard primer and then paints will sometimes get lucky on cedar. Most of the time, the knots come back through within a week.

## The "I thought you'd primed it" moment

We've been called out to fix tannin bleed that other contractors caused. The conversation is always the same: the homeowner is angry, thinks the paint is defective. Then they check with the contractor, who says "we primed it" — but it turns out they used a generic waterborne primer that doesn't block tannin.

Fixing the problem after the fact means sanding back the bled-through areas, re-priming with BIN, and re-coating. It's not free. Doing it right the first time costs maybe an extra $100–$200 in materials on a typical ceiling and saves the rework.

## Exterior tannin bleed

Same issue, different visuals. On an exterior cedar that a homeowner wants painted white (solid stain or full paint), tannins will bleed through in the first rain if the substrate wasn't properly primed.

Exterior blocking products:

- **Zinsser Peel Stop Extreme** or **Zinsser Gardz** — for exterior softwoods, block tannins and improve adhesion.
- **Benjamin Moore Fresh Start Superior Primer** — good on exterior softwoods, but needs two coats on heavy tannin woods like western red cedar.

Exterior white paints on cedar are a real challenge. We succeed when we prime properly. We've seen competitor jobs on cedar exteriors where yellow tannin streaks became visible within months of a white paint going on. They're not repairable by overcoating with more white. The substrate has to be re-primed.

## Is it worth painting cedar white in the first place?

Philosophical question. Some clients love the look. Some think it's a mistake to cover beautiful cedar with white paint.

Our take: if the cedar is older, damaged, or the homeowner wants a clean modern aesthetic, white or near-white makes sense. If the cedar is new or in great condition, consider staying with a transparent or semi-transparent stain — [our oil vs stain post](/blog/cedar-oil-vs-stain-which-is-right) covers the options.

Whichever direction you pick, tannin blocking is a solved problem. It just has to be done correctly.

## Where to start

If you're planning a project that involves painting over cedar, pine, or fir — especially a colour change — make sure the contractor's proposal explicitly specifies a stain-blocking primer. If it doesn't, ask. [Book a site visit](/contact) and we'll walk through the exact product and process we'd use on your specific wood.`,
  },
  {
    slug: "strata-repaint-case-study-whistler",
    title: "Strata repaint case study: phasing a 32-unit project without upsetting residents",
    publishedAt: "2024-10-28",
    excerpt:
      "A real strata exterior repaint project in Whistler, from first council meeting to final closeout. The phasing plan, the communication rhythm, and what we'd do differently if we ran it again.",
    coverUrl: "/stock-images/portfolio/dark-cedar-chalet-whistler.jpg",
    category: "Case study",
    content: `A strata council in Whistler called us in early 2024 about a full exterior repaint on their 32-unit townhouse complex. Last full paint was 11 years previous. Owners were starting to complain about peeling on multiple elevations. The council had gotten three bids, ours was the middle one. They chose us not on price — they chose us on the phasing and communication plan.

Here's how that project actually ran. Names and specifics anonymized.

## The problem the council was solving for

Beyond the paint itself, the council had three concerns:

1. **Resident disruption.** 32 units, mixed owner-occupied and rental, some seniors, a couple of young families. Complaints about construction noise during a previous roofing project had been intense.
2. **Timeline control.** A previous contractor on a smaller project had estimated 3 weeks and taken 7. The council had lost the trust of owners who'd rearranged their lives for the original timeline.
3. **Documentation.** The council wanted a closeout package they could hand to residents and file for the next maintenance cycle 10+ years out.

Our proposal was built around those three concerns, not just the paint.

## The phasing plan

We broke the complex into 8 phases of 4 units each. Each phase was a separate mini-project:

- **Day 1 of phase:** Setup, scaffolding if needed, protection of plants and walkways.
- **Day 2–3:** Pressure washing, prep, caulk replacement, carpentry spot-repairs.
- **Day 4–5:** Prime and first coat.
- **Day 6:** Second coat.
- **Day 7:** Final detail, touch-ups, cleanup.
- **Day 8:** Walkthrough with property manager.

Each phase took 7 working days. With 8 phases, plus weather buffer, we'd contracted for 12 weeks total. We finished in 10.5 weeks.

Phases were scheduled starting with the furthest units from the main entrance so that by the time we were working near high-traffic areas, the crew had its rhythm.

## Communication rhythm

Two weeks before start, we sent a printed package to every owner and tenant:

- Project overview (one page, plain language).
- Phase schedule with a map showing which units were in which phase and which weeks.
- Contact info for the project lead (me) and the property manager.
- FAQ covering the common concerns (noise, access, parking, pets, paint fumes).
- A photo of the colour palette approved by the council.

48 hours before each phase's start, we hung laminated notices on the front door of every unit in the upcoming phase, confirming dates.

Daily during active phases, we posted a short written update on a whiteboard in the mail room: what had been done that day, what was planned for the next day, any issues. The property manager photographed it and sent it to owners who'd asked for email updates.

One evening per week during active work, I was on-site from 4:30 to 6:00 for residents to come talk to me directly. Most weeks nobody came. Some weeks one or two residents came with a question or a specific concern. Every one of those conversations prevented a bigger issue.

## Product spec

- **Painted horizontal siding (Hardie):** Benjamin Moore Aura Exterior in the council-approved colour. Two coats.
- **Exposed cedar trim and accents:** Sikkens Cetol SRD Plus, semi-transparent tint.
- **Entry doors:** Benjamin Moore Advance, slight sheen.
- **Metal railings and door trim:** Sherwin-Williams DTM Acrylic over a rust-inhibitive primer.
- **Caulking:** OSI Quad at all moving joints, Sherwin-Williams Loxon on larger expansion joints.
- **Primer:** Zinsser Peel Stop Extreme on cedar where tannin blocking was needed.

All products documented in the closeout package with batch numbers and can counts per phase.

## Carpentry that emerged mid-project

On a project this old, carpentry repair is never fully scoped at quote time. During prep, we found:

- 12 sections of rotted fascia across 6 units. Replaced.
- 4 window trim boards that were too far gone to save. Replaced.
- 2 sections of siding with board-end rot. Replaced individual boards.
- 8 caulk joints that needed removal and replacement rather than topping up.

Each additional repair was documented, photographed, priced, and approved by the property manager before work proceeded. Total carpentry add-ons came to about 6% of the paint budget. All approved in writing, all tracked.

## What went wrong

Two things, both minor in hindsight:

**A phase overran by two days because of weather.** Phase 5 hit an unexpected three-day rain pattern. We fell two days behind schedule. Communicated immediately to the property manager, who updated the affected owners. Made the time up by slight compression of phase 6 setup. No owner complaints.

**Paint colour on one elevation read differently than the sample.** The colour approved by the council looked about 10% darker on the north-facing elevation due to shade. Two owners on that elevation raised it at the weekly check-in. The council's building committee and I walked it together. Decision was to keep the colour — it was the spec'd colour, and the elevation-specific variation was within normal range. Committee explained this to the complaining owners. Issue resolved.

## Closeout package

Delivered to the property manager on project completion:

- Final scope-vs-delivered comparison document.
- Product list with batch numbers per phase, cross-referenced to elevation.
- Before-and-after photos of each phase, labelled.
- Warranty document (3-year on labour, manufacturer warranties on products).
- Touch-up paint in labelled 1L cans, stored in the property manager's closet. One can per colour per 4 units.
- Maintenance schedule recommending annual washes and 3-year inspection.
- List of carpentry repairs with locations and materials used.

The council's intent was to hand this package to the next council 10 years from now. A project is only as good as the documentation left behind for the next cycle.

## What we'd do differently

Two things:

**Start the weekly on-site office hour earlier in the project.** We started it at week 3. Looking back, week 1 would have been better. A couple of small early concerns didn't surface until week 5, and they were easier to address immediately than later.

**Add a digital communication channel.** The laminated door hangers worked. The whiteboard in the mail room worked. But some residents told us afterward they'd have preferred email updates directly to them. For the next strata project we take on, we'll set up a simple email list.

## The paint itself

Is fine. It's two coats of Aura over properly-prepped substrate with quality caulk at every joint. It's going to last 10–12 years in this climate with reasonable maintenance. That was, by the end, the most straightforward part of the project.

## Where to start

If you're on a strata council or property manager weighing a full exterior repaint in the Sea to Sky, [get in touch](/contact). Our [commercial and strata painting service page](/services/commercial) covers more on how we scope this type of work. For context on the product side, [our breakdown of premium paint](/blog/premium-paint-worth-it) covers where the product budget earns itself back.`,
  },
  {
    slug: "chalet-restoration-case-study-whistler",
    title: "Restoring a Whistler chalet exterior: before, after, and the products we used",
    publishedAt: "2024-10-10",
    excerpt:
      "A full exterior restoration on a 15-year-old cedar chalet in Whistler. What we found, what we replaced, which products we reached for, and what the finished project tells us about cedar maintenance in the Sea to Sky.",
    coverUrl: "/stock-images/portfolio/chalet-bay-window-after-whistler.jpg",
    category: "Case study",
    content: `A Whistler chalet we finished in 2024 started as a classic case: 15-year-old rough-sawn cedar exterior, original semi-transparent stain last refreshed 8 years prior, south-facing elevations with significant UV damage, north-facing elevations with blackened wood behind remaining finish. The owners had been thinking about repainting for several years. What they needed wasn't repainting — it was restoration.

Here's the project from first walkthrough to final closeout.

## What we found on the site visit

A 3,800 sqft two-storey chalet with:

- **South and west elevations:** Cedar substantially weathered. Original stain mostly gone on upper two-thirds. Surface fibres opening up. Water no longer beading — soaking in within seconds.
- **North elevation:** Finish mostly still intact but wood behind it showing black fungal growth in several areas. Moisture trapped.
- **East elevation:** Best condition. Remaining finish serviceable, some UV fade.
- **Timber-frame posts and beams:** Silvery-grey, some checking in the surface grain. Structurally fine.
- **Bay window surround:** Yellow exterior trim, peeling paint in sheets. Cedar beneath was degraded.
- **Deck T&G ceiling:** Original finish still mostly intact but showing failure starting at the edges.
- **Fascia and soffit:** Mixed condition. Two sections of fascia with soft wood indicating early rot.

Before-and-after photos from this project are visible on our [work page](/work), including the bay window restoration which ran as one of our featured before/after sliders.

## The conversation with the owners

The owners had been quoted by another contractor for $15,000 as a "refresh repaint." We quoted $28,000 for full restoration. The difference was what each contractor had scoped.

The $15,000 quote was to wash, spot-prime failures, and apply one coat of solid stain. It would have looked great for maybe 2 years. The underlying substrate problems — the trapped moisture, the degraded surface fibres, the starting-rot fascia — would have continued regardless.

Our $28,000 quote included:

- Full pressure wash with cedar brightener.
- Fascia replacement (two sections).
- Scraping and sanding of all failing finish.
- Timber-frame member sanding and re-staining.
- Bay window surround full rebuild and repaint.
- Deck T&G ceiling refresh.
- Two full coats of premium stain on all cedar.
- Spot-primed bare areas before coats.
- Project report and 3-year warranty.

The owners went with our scope. We started in mid-June.

## Product spec

- **Rough-sawn cedar siding:** Sikkens Cetol SRD Plus in a custom-matched semi-transparent tint. Two coats.
- **Timber-frame posts and beams:** Sikkens Cetol SRD Plus in the same tint. Two coats.
- **Deck T&G ceiling:** Sikkens Cetol HLS Plus (higher-film grade for covered surface).
- **Painted bay window trim:** Zinsser BIN stain-blocking primer, followed by two coats of Benjamin Moore Aura Exterior in a crisp white.
- **New fascia boards:** Pre-primed on all six faces before installation (end grain especially), then two finish coats.
- **Metal flashing:** Rust-Oleum Professional Hi-Performance Enamel over Rust-Oleum Clean Metal Primer.

Six distinct products across the project, each matched to its specific substrate.

## The schedule

- **Week 1:** Setup, full pressure wash, carpentry assessment, begin carpentry replacement on fascia.
- **Week 2:** Complete carpentry. Sand and prep south and west elevations.
- **Week 3:** Prep north and east elevations. Begin first coat on south (warmest, driest first).
- **Week 4:** First coat on remaining elevations. Begin second coat on south.
- **Week 5:** Second coat on remaining elevations. Timber-frame work.
- **Week 6:** Bay window trim. Deck ceiling. Details.
- **Week 7:** Final walkthrough, touch-ups, cleanup.

Seven weeks total on a 3,800 sqft chalet. One weather delay (three days of rain in week 3). We built the schedule with five extra days of buffer. Used three, finished two days ahead.

## What a $28,000 project actually buys vs a $15,000 "refresh"

A year out from finish, the restoration job is:

- Colour uniform across all elevations.
- Finish uniformly intact.
- Water still beading on all surfaces.
- Fungal growth areas fully resolved (previously-blackened wood now healthy).
- Fascia solid, no rot progression.
- Bay window trim bright white, no tannin bleed.

If the owners had taken the $15,000 scope, a year out they'd have:

- Colour mostly uniform but thin on the south elevations where one coat couldn't cover the damage.
- Continued peeling starting in year 2 on poorly-prepped areas.
- Fungal growth still active under the new finish on the north elevation.
- Fascia continuing to rot.
- Bay window tannin bleed showing in weeks.

The owners would have been back in the market for another repaint in 3 years, paying another $15,000+, probably by a different contractor.

The $28,000 project is scheduled for a maintenance refresh at year 4 (about $3,500–$5,000) and a full repaint in year 10–12.

Total 10-year cost of restoration approach: about $32,000.
Total 10-year cost of cheaper refresh plus the repaint they would have needed: about $32,000, with worse appearance throughout.

Same money. Very different outcome.

## What the project tells us about cedar maintenance

Three lessons, in order of importance:

1. **Maintenance is cheaper than restoration.** If these owners had had Sikkens Cetol reapplied every 4 years for the 15 years, total cost over that span would have been around $18,000–$24,000. They spent $28,000 at the restoration point. The maintenance schedule would have been cheaper and the home would have looked better throughout.

2. **Prep can't be skipped on rough-sawn cedar.** The difference between a 2-year finish and a 10-year finish is almost always prep.

3. **Cedar has to breathe.** The north-elevation fungal growth was caused by a paint system that was sealing in moisture rather than letting it out. Penetrating stains let the wood dry. Film paints and heavy solid stains often don't.

## Where to start

If you have a cedar chalet in the Sea to Sky showing any of what we found on this project, [get in touch](/contact). Site visits are free. Related reading: [wood restoration in the Sea to Sky](/blog/wood-restoration-sea-to-sky-cedar-fir), [oil vs stain for cedar](/blog/cedar-oil-vs-stain-which-is-right), and our [wood restoration service page](/services/wood-restoration).`,
  },
  {
    slug: "why-we-stopped-oil-primer-rough-cedar",
    title: "Why we stopped using oil-based primer on rough cedar",
    publishedAt: "2024-09-28",
    excerpt:
      "For years, oil-based primer was the default on rough cedar siding. We've shifted away from it for most cedar work over the last two seasons — not because it fails, but because a better alternative exists. Here's what changed and why.",
    coverUrl: "/stock-images/portfolio/cedar-siding-installation-whistler.jpg",
    category: "Case study",
    content: `A decade ago, specifying oil-based primer on rough cedar siding was uncontroversial. The conventional wisdom was that oil penetrated better than water-based products, blocked tannins reliably, and gave the best base for either solid stain or paint. Every paint rep agreed. Every trade publication said the same.

Over the last two painting seasons in the Sea to Sky, we've moved away from oil-based primer for most of our cedar work. The reasons are practical, not ideological. Here's what changed.

## What oil-based primer does well

Before the case against — real credit where it's due. Oil-based primers still have legitimate strengths:

- **Deep penetration into bare wood.** Oil soaks into the first 1–2 mm of substrate in a way water-based products don't.
- **Excellent tannin blocking.** Traditional oil-alkyd primers handle cedar and redwood tannins reliably.
- **Adhesion on chalky or weathered surfaces.** Oil penetrates through surface contamination better than most water-based primers.
- **Proven track record.** Decades of successful jobs.

None of those strengths have gone away. The product still works.

## Why we've moved away from it anyway

Five reasons, in rough order of significance:

### 1. Reformulations have changed how it works

VOC regulations have forced most oil-based primers to reformulate over the last decade. The products sold as "oil-based primer" today are often lower-VOC alkyd blends, not the high-solids oil primers from 20 years ago. Some of them still perform well. Some don't. The label says the same thing but the can behaves differently.

Waterborne stain-blocking primers (Zinsser Peel Stop Extreme, Sherwin-Williams Emerald Exterior Latex Primer, Benjamin Moore Fresh Start) are genuinely better now than they were 10 years ago. Their tannin blocking has improved substantially. The gap with oil has narrowed.

### 2. Application and cleanup

Oil-based primer is a slower, messier product to work with. It takes longer to apply, it takes longer to dry between coats, and the cleanup requires mineral spirits. On a crew that's trying to keep a project moving, the time and material cost of oil adds up.

Water-based alternatives apply faster, re-coat faster, and clean up with water. On a multi-week exterior project, we can save a half-day per week in handling time by switching to water-based primer.

### 3. Inter-coat compatibility

If we prime with oil-based and then apply a water-based finish coat (which is what most modern exterior paints and stains are), there's always a small risk of inter-coat adhesion issues. The products are compatible in theory, but they're not identical in how they bond to each other over long timeframes.

Water-based primer under water-based finish is chemically simpler. Adhesion is usually better. Long-term film integrity is more predictable.

### 4. Environmental and health

Oil-based primer has a VOC profile and solvent signature that matters for crew health and client comfort. On occupied homes, on interior projects, on sensitive clients — water-based is usually the right call.

This isn't a purist argument. We're not throwing out all oil products. But as waterborne alternatives have closed the performance gap, the environmental and health cost of oil starts to matter more in the decision.

### 5. Schedule reliability

Oil-based primer needs more favourable conditions to apply well. It's more sensitive to humidity, temperature, and substrate moisture. In a Whistler summer where we're chasing a tight weather window, water-based products give us more days where we can productively work.

## What we use now

On a typical cedar siding project requiring primer:

- **Bare rough-sawn cedar:** Usually no primer. We use penetrating stains (Sikkens Cetol SRD Plus, Sansin ENS) that don't require separate priming.
- **Painting over cedar (any colour):** Zinsser Peel Stop Extreme or Benjamin Moore Fresh Start Exterior Superior Primer. Both waterborne, both handle cedar tannins.
- **Interior cedar being painted:** Zinsser BIN (shellac-based, not oil-based). Best tannin blocker available. Fast-drying.
- **Knots on pine or fir trim:** Zinsser BIN spot-prime, then standard waterborne primer over the rest.

Where we still reach for oil-based primer:

- **Very old, very weathered substrates** where deep penetration matters more than the other factors.
- **Metal surfaces** (where oil-alkyd metal primers are still the best option).
- **Specific repair scenarios** where the substrate behaviour demands it.

## The honest tradeoff

We've lost some depth of penetration on bare cedar by switching to waterborne primer. On a brand-new cedar wall being painted for the first time, an oil primer would arguably still give a marginally better foundation.

What we've gained:

- Faster schedule on multi-week projects.
- Cleaner application and cleanup.
- Better inter-coat compatibility with modern finish paints.
- Lower health and environmental impact.
- More predictable behaviour in variable weather.

The first loss is small. The gains are meaningful across a whole project.

## What this doesn't mean

**We haven't stopped using oil-based products entirely.** Oil-based stains (Armstrong-Clark, Cabot) are still in our kit for specific wood surfaces. Oil-modified alkyds (Sikkens Cetol SRD Plus) are still our first choice on rough cedar siding.

**We haven't concluded water-based is always better.** Some substrates still want oil. Some clients have legitimate preferences. Some older homes need what they're used to getting.

**We haven't switched because a paint rep told us to.** Reps always have a reason to promote the latest product. We switched because we watched our own projects over two full seasons.

## Why we're sharing this

A painting blog that just says "use premium products and hire a pro" is empty content. The real conversations in trade are specific — this product vs that product, this substrate vs that one, this climate vs that one. Sharing what we've actually learned across hundreds of Sea to Sky projects is more useful than abstract advice.

If you're a homeowner reading this, the practical takeaway is: ask your contractor what specific primer they'd use on your cedar, and whether they've updated their product choices in the last couple of years. "We use what we've always used" isn't necessarily wrong, but "we've updated to X because Y" is the answer from someone who's actually paying attention.

## Where to start

If you have a cedar project coming up and want to understand the product spec, [book a site visit](/contact). Related: [rough-sawn cedar prep](/blog/rough-sawn-cedar-prep-whistler), [oil vs water-based finishes in mountain climates](/blog/oil-based-vs-water-based-wood-finishes-mountain), and our [wood restoration service page](/services/wood-restoration).`,
  },
  {
    slug: "what-prep-really-means-exterior-paint",
    title: "What 'prep' really means: a walk through a 40-hour exterior prep",
    publishedAt: "2024-09-14",
    excerpt:
      "Every painting quote claims 'full prep included.' What does that actually mean in hours, tasks, and decisions? Here's a real-time walkthrough of the 40 hours we spent prepping one Whistler exterior before any finish coat went on.",
    coverUrl: "/stock-images/portfolio/alpenglow-painter-exterior-prep-whistler.jpg",
    category: "Process",
    content: `"Full prep included" appears on every exterior painting quote. It's one of the least informative phrases in the industry. Two contractors both claiming full prep can do wildly different work and produce wildly different outcomes.

To make it concrete, here's a real breakdown of the 40 hours we spent prepping a 2,400 sqft Whistler home exterior before any paint went on a wall. This was a repaint on a home that was about 8 years out from its last full exterior. Substrate condition was typical for that age: serviceable overall, localized failures, significant UV damage on south elevations.

## Hours 1–4: Setup and protection

A two-person crew, morning one.

- Walked the perimeter with the owner. Confirmed the project scope, walked through any last-minute concerns, took keys and gate codes.
- Protected landscaping: drop cloths over flower beds near walls, breathable fabric over shrubs touching elevations, plastic on tender new plantings only.
- Covered deck surfaces and patio with tarps anchored with painters tape (not masking tape — tape that won't leave residue).
- Removed exterior hardware where possible: light fixtures, house numbers, door kickplates. Photographed hardware before removal for reinstall reference.
- Masked windows with 3M yellow poly masking film. Every window. On a 2,400 sqft home with a dozen windows, this alone took about 2 hours.

Hour 4, we'd touched zero paint and done zero prep in the "paint work" sense. Setup is just setup. It has to happen.

## Hours 5–12: Pressure washing

Day one afternoon and morning of day two.

- Started at the roofline, worked down, elevation by elevation.
- Pressure 500–1,200 PSI on cedar siding, 1,500–2,500 on Hardie trim. Different tips for different surfaces.
- Used a cedar brightener (oxalic-acid based) on the rough-sawn cedar to restore surface colour and open the grain.
- Rinse thoroughly after each section to remove cleaner residue.
- Let overnight dry before doing anything else.

Eight hours of washing. Most homeowners see 2 hours of someone with a wand and assume that's it. The careful version takes four times as long because you're matching pressure to substrate and rinsing properly.

## Hours 13–22: Scraping and sanding

Day two afternoon through morning of day three.

- Elevation by elevation, used carbide scrapers to remove all loose finish and peeling areas.
- Transitions where old finish met bare wood were feather-sanded with 60–80 grit on a Festool Rotex with dust extraction.
- Areas with chalking (mostly south-face trim) were scuff-sanded to promote adhesion on the new coat.
- Specific trouble spots: two window sills that had significant UV damage, one section of fascia where paint was flaking in sheets, three small areas at the corners where the previous paint job had been thin.

Total: about 10 hours across two days of detailed prep work. Every square foot of suspect finish was either treated or confirmed sound.

## Hours 23–28: Carpentry repair

Day three afternoon.

- Replaced one section of fascia (approximately 4 feet) that had gone soft.
- Replaced two window trim pieces on the south elevation that had rotted at the mitered corners.
- Filled smaller damaged areas with an exterior-grade wood epoxy.
- Nail-set every proud fastener and spot-primed rust-prone areas with Zinsser metal-blocking primer.
- Removed and replaced approximately 15 feet of failed caulk at window surrounds and trim joints. Replaced with OSI Quad at the joints and Sherwin-Williams Loxon at the larger gaps.

About 6 hours. Carpentry is usually an emerging scope item — you don't always know exactly what you'll find until you're into the prep.

## Hours 29–34: Priming

Day four morning.

- Spot-primed all bare wood with Benjamin Moore Fresh Start Exterior Superior Primer. Every exposed substrate got a primer coat.
- On the south-elevation trim that had seen the worst UV damage, full-primed the entire trim surface (not just spot-primed).
- On repaired carpentry, primed all six faces of new wood before install and then primed again after install.
- Let everything dry per spec before proceeding.

About 6 hours. Spot-priming is often underestimated — it sounds fast but actually requires fine brush work at every transition.

## Hours 35–40: Final prep check and masking verification

Day four afternoon.

- Walked the entire perimeter with a small ladder and a flashlight, looking at every elevation under raking light for missed areas.
- Re-sanded three small areas I found that needed another pass.
- Verified all caulk was cured (press-test with finger).
- Verified all window masking was still sound; replaced any that had blown loose.
- Covered walkways and any remaining exposed hardware.
- Prepped paint cans: verified batch numbers, tinted if needed, stirred thoroughly.

About 6 hours.

Total prep: 40 hours. Next day, we started the first finish coat.

## What a "full prep" quote at half these hours is doing

A contractor claiming "full prep included" who only spends 15–20 hours on a project of this size is skipping specific things. Most commonly:

- Pressure wash is done at higher pressure, faster, without cleaner. Removes visible dirt but doesn't prepare the substrate.
- Scraping happens only on obviously peeling areas; no broader sanding or scuffing of marginal areas.
- Caulking is topped up rather than replaced where it's failing.
- Priming is skipped on "minor" bare areas that a topcoat is expected to cover.
- Hardware and window masking is done hastily with masking tape instead of proper films.

None of these are individually critical. All of them together cut 2–3 years off the finish life.

## What we include in writing

When we quote an exterior, the proposal lists prep specifically:

- Wash method, pressure range, and cleaner product.
- Scrape and sand standard, with note on what gets spot-sanded vs full-sanded.
- Caulk product and joint approach.
- Carpentry expected and what's contingent.
- Priming product and coverage (spot vs full).
- Masking and protection standard.

If your contractor's proposal doesn't include this kind of specificity, the prep may or may not happen. You're buying a black box.

## Where to start

If you want an exterior quote that spells out prep in writing, [get in touch](/contact). For more on why prep matters specifically on rough cedar, see [our cedar prep walkthrough](/blog/rough-sawn-cedar-prep-whistler). For context on the broader failure modes prep prevents, see [why exterior paint fails early](/blog/why-exterior-paint-fails-early-mountains).`,
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
