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
