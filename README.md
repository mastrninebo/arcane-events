# Arcane Events

A responsive static website for **Arcane Events**, a Lusaka, Zambia-based events and creative-experiences company. It presents the brand, its services, selected work and media, and a contact/enquiry journey for prospective clients.

The site is intentionally lightweight: it is built with semantic HTML, page-scoped CSS, and small amounts of vanilla JavaScript. There is no package manager, build step, database, or server-side application in this repository.

## Contents

- [Pages and features](#pages-and-features)
- [Technology](#technology)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Editing guide](#editing-guide)
- [Contact-form behaviour](#contact-form-behaviour)
- [Design and accessibility](#design-and-accessibility)
- [Deployment](#deployment)
- [Known production tasks](#known-production-tasks)

## Pages and features

| URL | Purpose | Highlights |
| --- | --- | --- |
| `/index.html` | Home page | Brand introduction, partner placeholders, upcoming-event list, services preview, work/media previews, and a contact call to action. |
| `/pages/about.html` | About page | Company story, working principles, and a contact call to action. |
| `/pages/services.html` | Services page | Event planning, production, creative direction, corporate/social events, and event coordination. |
| `/pages/media.html` | Media page | Gallery, video, and story/news placeholders intended to be replaced as Arcane's media library grows. |
| `/pages/contact.html` | Contact page | Event-enquiry form, three-step process, and public contact details. |

Every page includes the Arcane navigation overlay, footer navigation, responsive layouts, and typography loaded from Google Fonts.

## Technology

- HTML5
- CSS3, including custom properties, Grid, Flexbox, responsive `clamp()` typography, and media queries
- Vanilla JavaScript for navigation interactions and form-state handling
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), loaded from Google Fonts

## Project structure

```text
arcane-events/
├── index.html              # Home page; includes its own styles and scripts
├── pages/
│   ├── about.html          # About Arcane
│   ├── contact.html        # Enquiry form and contact information
│   ├── media.html          # Gallery, video, and stories placeholders
│   └── services.html       # Service offering and past-work placeholders
├── assets/
│   ├── icons/              # Reserved for icons
│   ├── images/             # Reserved for photography and gallery images
│   ├── logos/              # Reserved for brand/partner logos
│   └── videos/             # Reserved for video files or related assets
├── css/
│   ├── style.css           # Reserved shared stylesheet (currently empty)
│   └── responsive.css      # Reserved responsive stylesheet (currently empty)
└── js/
    └── script.js           # Reserved shared script file (currently empty)
```

At present, each HTML document keeps its production CSS in an inline `<style>` block and its JavaScript in an inline `<script>` block. The `css/` and `js/` files are placeholders and are not linked by the pages.

## Run locally

Because this is a static site, any static web server will work.

### XAMPP / Apache

This repository is already located in XAMPP's `htdocs` directory. Start Apache in the XAMPP Control Panel, then visit:

```text
http://localhost/arcane-events/
```

### Other static servers

Serve the repository root with your preferred tool and open `index.html` through that server. For example, if Node.js is available:

```bash
npx serve .
```

Do not rely solely on opening the files directly from disk when testing; a local server better matches the deployed environment and makes relative links easier to validate.

## Editing guide

### Content

- Edit text directly in the appropriate HTML page.
- Keep links from files inside `pages/` relative to that directory: use `../index.html` for Home and `contact.html`, `about.html`, etc. for sibling pages.
- Update upcoming events on the home page in the `.event-list` section.
- Replace the `Partner`, `Venue`, `Event One`, `Featured Event Name`, and similar placeholder copy before launch.
- Replace the email address, phone number, social URLs, and any placeholder `href="#"` values with real destinations.

### Images, logos, and video

The site currently uses CSS gradient blocks as visual placeholders; no media files are committed. Add real assets under the relevant `assets/` subdirectory, then replace the corresponding placeholder `<div>` with meaningful `<img>` or video/embed markup.

For images, provide useful `alt` text. Optimised WebP/AVIF images are recommended for photography, with appropriate dimensions to avoid layout shift.

### Styling and interaction

- Reusable visual tokens such as `--navy`, `--cream`, `--coral`, `--yellow`, and `--container` appear in each page's `:root` block.
- The primary layout breakpoint is `800px`; the home page includes an additional `480px` breakpoint.
- Navigation JavaScript opens/closes the full-screen menu, updates `aria-expanded` (and on inner pages, `aria-hidden`), locks body scroll while open, and supports closing with the Escape key.

When making a design-wide change, update all five HTML pages or first refactor the duplicated styles and navigation code into shared `css/` and `js/` files. If refactoring, link the shared files using paths appropriate to the page location.

## Contact-form behaviour

`pages/contact.html` includes fields for name, company, email, phone, event type, event date, and event details. The current JavaScript intercepts submission with `preventDefault()` and displays a local confirmation message.

**It does not send enquiries anywhere.** Before production, connect the form to an approved backend, CRM, form provider, or email service. Ensure that integration includes server-side validation, anti-spam protection, error handling, privacy messaging, and a real success/failure response.

## Design and accessibility

The implementation provides a responsive editorial layout with a dark navy, cream, coral, and yellow palette. It uses semantic landmarks (`header`, `main`, `section`, `article`, `nav`, and `footer`), labelled menu controls, and a keyboard-accessible Escape action for the overlay menu.

Recommended accessibility QA before launch:

- Test keyboard focus order and visible focus states, particularly in the navigation overlay and form.
- Verify colour contrast after replacing placeholders or changing brand colours.
- Provide descriptive alt text and captions/transcripts for real media.
- Test the enquiry form with a screen reader once its submission service is connected.
- Validate heading order and page metadata after any content changes.

## Deployment

Upload the repository contents to the document root of any standard static host or Apache/Nginx server. The entry point must remain `index.html`, and the `pages/` directory must be deployed alongside it so relative navigation continues to work.

The public site requires internet access to load its Google-hosted fonts. If an entirely self-hosted deployment is required, download and serve the font files locally and replace the Google Fonts stylesheet link.

## Known production tasks

Before treating the site as launch-ready:

- Add real partner logos, event photography, gallery/video content, and story links.
- Replace demo event names/dates and media placeholders with current content.
- Connect the enquiry form to a live submission service.
- Replace placeholder contact and social links, including `hello@arcaneevents.com` and `+260 000 000 000` if they are not final.
- Add a favicon, Open Graph/social metadata, analytics/cookie handling as required, and a privacy policy if collecting personal data.
- Test all links, responsive breakpoints, form failure states, and page performance in target browsers.

## License

No license file is included. Treat all code, copy, and brand assets as proprietary unless the project owner adds a license.

Added to git