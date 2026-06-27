# ARTAURA — Static Portfolio Website

A premium, contemporary art-gallery portfolio for the **ARTAURA** collective.
Fully static. Zero backend. Deploys to **GitHub Pages** with a single push.

This README is written for **non-developers**. You will only need a text editor
(e.g. VS Code) and a free GitHub account to update the site.

---

## 1. Project Overview

ARTAURA is built with:

| Tech            | Why                                                |
| --------------- | -------------------------------------------------- |
| Next.js         | Modern React framework, exports to static HTML     |
| Tailwind CSS    | The design system / colours / spacing              |
| Framer Motion   | The smooth, gentle animations                      |
| TypeScript      | Used **only** in `src/data/*.ts` for safe content  |

Everything that you, the owner of the site, would want to change lives in **two
folders**:

```
src/data/         ← all text, contact info, artworks, workshops, blog posts
public/images/    ← all photos and the logo
```

Components in `app/` only **render** what's in `src/data/`. You should rarely
need to touch them.

---

## 2. Folder Structure

```
artaura/
├── app/                          ← The pages (you rarely edit this)
│   ├── page.js                   ← The main page (renders all sections)
│   ├── layout.js                 ← Loads fonts, sets <html> wrapper
│   └── globals.css               ← Base styles
│
├── src/
│   └── data/                     ← ★ EDIT HERE TO UPDATE THE WEBSITE ★
│       ├── site.ts               ← Site title, contact, navigation, socials
│       ├── artworks.ts           ← All artwork
│       ├── collections.ts        ← All collections
│       ├── workshops.ts          ← All workshops + Google Form links
│       ├── blogs.ts              ← All blog posts
│       └── about.ts              ← About-page story, timeline, awards, testimonials
│
├── public/
│   └── images/                   ← ★ DROP IMAGE FILES HERE ★
│       ├── logo/                 ← Logo
│       ├── artworks/             ← One file per artwork
│       ├── collections/          ← One cover image per collection
│       ├── workshops/            ← One cover image per workshop
│       └── blog/                 ← One cover image per blog post
│
├── components/ui/                ← Reusable UI building blocks (shadcn/ui)
├── tailwind.config.js            ← Design system: colours, fonts, spacing
├── next.config.js                ← Build configuration (static export, GitHub Pages)
└── package.json                  ← The project's dependencies
```

---

## 3. Updating Contact Information

Open **`src/data/site.ts`** and edit the `contact` block:

```ts
contact: {
  phone:            '+1 (415) 555 0142',
  email:            'hello@artaura.studio',
  instagram:        'https://instagram.com/artaura.studio',   // full URL
  instagramHandle:  '@artaura.studio',                        // text shown on the page
}
```

Save the file. The phone/email/Instagram automatically update in:

- The footer of every page
- The mobile menu
- The About page sidebar
- The Nav bar's "Follow" button

### Updating Footer text & address

In the same `site.ts`, edit:

```ts
footer: {
  note:    'made slowly, in the studio.',
  address: '14 Willow Lane, Studio 03 · Coastal District',
}
```

---

## 4. Adding New Artwork

### Step 1 — Add the image file

Save the image as a JPG (recommended size: at least 1400 px wide) into:

```
public/images/artworks/
```

Use a simple lowercase filename with dashes, e.g. `summer-light.jpg`.

### Step 2 — Add the artwork to `artworks.ts`

Open **`src/data/artworks.ts`** and add a new object inside the array:

```ts
{
  id:          'summer-light',
  title:       'Summer Light',
  medium:      'Oil on linen',
  year:        2025,
  dimensions:  '100 × 80 cm',
  image:       asset('/images/artworks/summer-light.jpg'),
  collection:  'Embers',
  description: 'A short paragraph about the work…',
},
```

> `id` must be unique. `collection` must match the **name** of an existing
> collection in `collections.ts` (e.g. "Embers", "Soft Cartography").

### Step 3 — (Optional) Assign to a different collection

Either pick an existing collection name **or** create a new collection — see
section 6 below.

Save and that's it. Restart the dev server (if running) and the artwork appears
in the Gallery, in its collection page, and as a possible "related work".

---

## 5. Editing Existing Artwork

Open `src/data/artworks.ts` and edit any field of the artwork you want to
update — title, description, medium, year, dimensions, collection, or image.

To replace just the **image**:

1. Drop a new file with the same name into `public/images/artworks/`, **or**
2. Upload a new file and change the `image:` line to point to it.

---

## 6. Creating a New Collection

### Step 1 — Add a cover image

Drop the cover image into:

```
public/images/collections/
```

For example `winter-light.jpg`.

### Step 2 — Add the collection in `collections.ts`

```ts
{
  id:          'winter-light',
  name:        'Winter Light',
  tagline:     'Cold air, warm pigment',
  count:       8,
  year:        2025,
  cover:       asset('/images/collections/winter-light.jpg'),
  description: 'A paragraph about the collection…',
},
```

### Step 3 — Assign artworks to it

In `artworks.ts`, set `collection: 'Winter Light'` on each piece that belongs.

---

## 7. Adding a Workshop

### Step 1 — Create a Google Form

1. Open [https://forms.google.com](https://forms.google.com)
2. Build the registration form (name, email, dietary needs, etc.)
3. Click **Send → Link** and copy the share URL.

### Step 2 — Add the cover image

Drop the cover image into `public/images/workshops/` (e.g. `autumn-light.jpg`).

### Step 3 — Add the workshop entry

Open **`src/data/workshops.ts`** and add:

```ts
{
  id:              'autumn-light',
  title:           'Painting Autumn Light',
  date:            'Sat, 18 Oct 2025',
  duration:        '10:00 — 16:00 (6 hours)',
  location:        'ARTAURA Studio, Willow Lane',
  level:           'All levels',
  cover:           asset('/images/workshops/autumn-light.jpg'),
  description:     'A short paragraph about the workshop…',
  registrationUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform',
  past:            false,
},
```

The "Register" button on the website opens this URL in a new tab.

---

## 8. Editing Workshops

In `src/data/workshops.ts` you can change:

- `date`           → human-readable date string
- `location`       → where it happens
- `description`    → workshop blurb
- `duration`       → e.g. "10:00 — 16:00 (6 hours)"
- `registrationUrl`→ the Google Form URL
- `past`           → set to `true` to move it into "Past sessions"

---

## 9. Adding Blog Posts

### Step 1 — Add a cover image

Drop a JPG into `public/images/blog/` (e.g. `light-and-shadow.jpg`).

### Step 2 — Add the post in `blogs.ts`

```ts
{
  id:          'light-and-shadow',
  title:       'On Light and Shadow',
  category:    'Studio Notes',
  date:        '10 Jun 2025',
  readingTime: '5 min',
  cover:       asset('/images/blog/light-and-shadow.jpg'),
  excerpt:     'One sentence summary that appears on the cards.',
  content: [
    'First paragraph (will receive the decorative drop-cap).',
    'Second paragraph…',
    'Third paragraph…',
  ],
},
```

Each entry in `content[]` becomes a paragraph on the article page. There is no
HTML support — just paragraphs. Keep it simple and editorial.

---

## 10. Updating Images

| Folder                      | What goes here                  | Recommended size |
| --------------------------- | ------------------------------- | ---------------- |
| `public/images/logo/`       | The ARTAURA logo                | Square, ≥ 512 px |
| `public/images/artworks/`   | One image per artwork           | ≥ 1400 px wide   |
| `public/images/collections/`| One cover image per collection  | ≥ 1600 px wide   |
| `public/images/workshops/`  | One cover image per workshop    | ≥ 1600 px wide   |
| `public/images/blog/`       | One cover image per blog post   | ≥ 1600 px wide   |

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`
**Naming:** lowercase, words separated by dashes, e.g. `summer-light.jpg`
**Tip:** keep file size under ~500 KB if possible — use [squoosh.app](https://squoosh.app) to compress.

---

## 11. Updating the Logo

1. Save your new logo as **`artaura-logo.png`** (or `.svg`).
2. Replace the file inside `public/images/logo/`.
3. If you use a different filename, update the path in `src/data/site.ts`:
   ```ts
   logo: asset('/images/logo/your-new-file.png'),
   ```

The logo is automatically used in the navigation bar, the mobile menu and the footer.

---

## 12. Updating Navigation

In `src/data/site.ts`:

```ts
navigation: ['Home', 'Gallery', 'Collections', 'Workshops', 'Blog', 'About']
```

- **Rename** a page → change its label in this array **and** in the `current === '...'` checks inside `app/page.js`.
- **Remove** a page → just delete the entry from the array. The link disappears from the header and footer.
- **Adding** a new page → add the label here, then add a new `{current === 'Whatever' && <YourComponent />}` block at the bottom of `app/page.js`.

---

## 13. GitHub Pages Deployment

### One-time setup

#### 1. Install the project locally

You need [Node.js 20+](https://nodejs.org) installed.

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

#### 2. Try a local preview

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

#### 3. Build the static site

```bash
npm run build
```

This generates the deployable static site inside the `out/` folder.

> If your GitHub Pages URL will be **`https://<user>.github.io/<repo>/`**, you
> must build with:
>
> ```bash
> NEXT_PUBLIC_BASE_PATH=/<repo> npm run build
> ```
>
> Replace `<repo>` with your repository name. If you use a custom domain (no
> sub-path), omit this variable.

### GitHub Actions auto-deploy (recommended)

Create a file at `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy ARTAURA to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - name: Build
        run: npm run build
        env:
          # Set to /<your-repo-name> when hosting under a project page,
          # or leave empty for a custom domain or user/organisation page.
          NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}

      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

      - id: deployment
        uses: actions/deploy-pages@v4
```

### Enable GitHub Pages

1. Push your code to GitHub.
2. Go to your repo → **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. Wait ~1 minute. Your site is live at:
   `https://<your-username>.github.io/<your-repo>/`

Every future `git push` to `main` will automatically rebuild and deploy.

---

## 14. Troubleshooting

### Images are not displaying

- Check the **filename** matches exactly what is in the `.ts` file (case-sensitive).
- Confirm the file is inside the right `public/images/...` folder.
- If deployed and broken: make sure `NEXT_PUBLIC_BASE_PATH` is set to `/<repo>` for project pages.

### A link is broken / page is 404

- Check the spelling of the page name in `src/data/site.ts → navigation` matches the names used inside `app/page.js`.
- Run `npm run build` again — sometimes the cached `.next/` folder needs to be deleted (`rm -rf .next out`).

### Google Form doesn't open

- Open the URL in your browser first — make sure it's a public Google Form link.
- Forms set to "anyone with the link" work best.
- The `registrationUrl` must start with `https://`.

### Build fails

- Make sure your Node.js version is **20 or newer** (`node --version`).
- Delete `node_modules/` and `.next/` and run `npm install && npm run build`.
- Read the error message — most build errors mention the exact line and file.

### Site looks fine locally but broken on GitHub Pages

This is **almost always** a base-path issue. Set:

```
NEXT_PUBLIC_BASE_PATH=/<your-repo-name>
```

…before building. The GitHub Action above does this automatically.

### Deployment is not updating

- Check the **Actions** tab on GitHub — did the workflow succeed?
- Try a hard refresh (`Ctrl/Cmd + Shift + R`).
- Clear browser cache.

---

## 15. Maintenance Guidelines (Design Principles)

The site has a deliberate, calm visual language. To keep it consistent:

### Colours

Inspired by the ARTAURA logo's warm watercolour palette:

| Token         | Hex       | Use                                            |
| ------------- | --------- | ---------------------------------------------- |
| `cream-100`   | `#FAF4EA` | Main page background                           |
| `cream-200`   | `#F5EBDD` | Alternating section backgrounds                |
| `sienna-500`  | `#5A3220` | Primary text & buttons                         |
| `sienna-300`  | `#8E5A36` | Secondary text                                 |
| `sienna-200`  | `#B58660` | Subdued labels, uppercase eyebrows             |
| `terracotta-600`| `#B66B45`| Script accents, links, prices, hover states   |
| `terracotta-300`| `#E5A781`| Decorative brushstrokes                       |

All colours are defined in **`tailwind.config.js`** — change them there and the
entire site updates.

### Typography

- **Headlines** — `Cormorant Garamond` (serif), via `font-display`
- **Body**      — `Inter`, default
- **Accent**    — `Caveat` script, via `font-script` (for "from the studio", taglines)

### Spacing

- Sections vertical padding: `py-24 lg:py-32`
- Container max-width is set in `tailwind.config.js` (1400 px)

### Card layouts

- Artwork tiles: `aspect-[3/4]` portrait
- Collection covers: `aspect-[4/5]`
- Workshop / Blog covers: `aspect-[5/4]` / `aspect-[4/3]`
- All cards have hover `art-zoom` (1.2 s slow zoom on the image)

### Animation usage

Keep animations **subtle**. The current Reveal-on-scroll behaviour and image
zoom are sufficient. Avoid adding bouncy, fast or attention-grabbing animations.

---

## License

The site code is for ARTAURA. The bundled placeholder images (in `public/images/`)
are from Unsplash and free for commercial use; replace them with your own work
before launch.

---

## Need help?

If something here is unclear, please reach out — the goal is for **you** to be
able to update this site at any time without needing a developer.
