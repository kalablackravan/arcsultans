# Shared ARCSultans inner-page layout

## What will change
- Keep the homepage top-left ARC MAINNET block, top-right 999 SULTANS line, and full footer visible on all four Coming Soon pages.
- Keep each section title at the upper-left without covering either top status block.
- Remove the separate Palace button from the upper-right; Palace remains available in the footer.
- Keep only the center content changing to the small Coming Soon artwork.
- Change the OpenSea destination to https://opensea.io/.

## Technical details
- Extract the existing footer and top status blocks into shared components used by the homepage and all four section pages.
- Preserve the jsDelivr CDN image URLs and current pixel-art styling.
- Verify desktop and mobile layouts, all section links, Palace navigation, and the OpenSea link.
