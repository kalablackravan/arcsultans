# Footer navigation and Coming Soon pages

## What will change
- Rename the footer links to Palace, Chronicles, Journey, Royal Counsel, and Royal Scrolls.
- Make Palace return to the complete main page.
- Add four separate pages for Chronicles, Journey, Royal Counsel, and Royal Scrolls.
- Show the matching supplied title artwork at the upper-left of each page, with the supplied small Coming Soon artwork inside the page.
- Keep the current ARCSultans visual style and make the pages work cleanly on desktop and mobile.

## Technical details
- Use TanStack Router links and create one route file for each new page.
- Load all supplied GitHub artwork through jsDelivr CDN URLs so it remains available after deployment.
- Give every new page unique title, description, Open Graph, and Twitter metadata.
- Verify all five footer links, image requests, desktop/mobile layouts, and the existing whitelist flow.
