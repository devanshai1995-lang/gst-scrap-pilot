# GST Scrap Pilot

GST Scrap Pilot is a Chrome extension + website project built to streamline GST return, e-Way Bill, and e-Invoice document downloads from the official compliance portals.

## Project goals
- Simplify access to GST and compliance portals
- Reduce manual navigation and repetitive download steps
- Offer a clean extension interface for fast user workflows
- Provide a website landing page for product positioning and setup guidance

## Repository structure

```text
chrome-extension/   # Chrome extension source
website/            # Product website frontend
docs/               # Guides and documentation
package.json        # Root scripts for build and local preview
README.md           # Project overview
```

## Quick start

### 1) Install dependencies

```bash
npm install
```

### 2) Build project assets

```bash
npm run build
```

### 3) Open the extension in Chrome
- Go to `chrome://extensions/`
- Enable Developer mode
- Click `Load unpacked`
- Choose the `dist/chrome-extension` folder after build

### 4) Preview the website locally

```bash
npm run dev:website
```

Then visit the local preview URL shown in the terminal.

## Deployment

This project is configured for GitHub Pages deployment from the static website folder.

### Enable GitHub Pages
1. Open your repo on GitHub
2. Go to Settings > Pages
3. Source: `GitHub Actions`
4. Save

### Deployment flow

The workflow in `.github/workflows/deploy-pages.yml` publishes the contents of `website/` automatically whenever changes are pushed to `main`.

## Extension features
- GST return download flow
- e-Way Bill and e-Invoice portal shortcuts
- Quick service links
- Bulk download workflow support
- Saved popup form state

## Website features
- Product hero section
- Feature highlights
- Portal coverage overview
- User onboarding and installation guidance

## License
MIT
