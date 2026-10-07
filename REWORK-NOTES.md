# VioraQuest — Corporate Rework Notes

## Issues addressed
1. **Header:** "HR Login" removed from desktop header, mobile menu and footer on every public page. `login.html` and `dashboard/` are still in the folder but nothing links to them.
2. **School/coaching feel → corporate:** Home intro animation ("Learn / Practice / Interview / Get hired") is now Assess / Train / Apply / Perform. Hero, ratings, testimonials, programs journey and FAQ copy no longer use career/classroom/alumni language. Nav "Product / Studio" is now "Corporate Training / Enterprise Solutions". Leftover template names ("Apex", apexskill.example) replaced.
3. **Images:** 14 off-topic photos (chalkboards, graduate, robot dog, Scrabble tiles, "for sale" handshake, street walker, pencils, colour-grading screen, gamers, call-centre headset) replaced with boardroom, workshop, facilitator and team photos. Same filenames, so the HTML image method in IMAGE-CODE-METHOD.md still applies. Home 2 gained a hero background image. Alt text is now descriptive.
4. **Clear content:** New Home "What we do" services section; Clients page now shows partner cards (name, sector, what was delivered) instead of bare logo text; About page has a "Company expertise" section with figures; Home 2 fake accreditations (PMI/SHRM/ATD badges) replaced by expertise areas.
5. **Contact page:** "Send a Message" heading and labels were white-on-white in light theme — fixed for light and dark. Hero overlay fixed so contact details are readable. Map now matches the San Francisco address.
6. **Hero overlays:** the dark overlay on all image heroes was a 460px circle, not full width; it is now full-bleed so headings stay legible.

## Before you launch — replace placeholders
- Client names on Clients page, testimonials and all statistics (45,000+, 500+, 98% …) are sample content.
- Phone, email and office address on the Contact page are sample values.
- Photos are large (up to 3200px); compress to ~1600px for faster loading.

All CSS changes are appended at the bottom of `assets/css/qa-theme.css`.
