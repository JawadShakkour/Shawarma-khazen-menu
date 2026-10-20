# Shawarma Khazen Menu

A mobile-friendly, multilingual online menu for Shawarma Khazen. The menu supports Hebrew, Arabic, and English, with searchable food items, categories, prices, and dish photos.

**Live website:** [menu.shawarma-khazen.workers.dev](https://menu.shawarma-khazen.workers.dev/)

## How publishing works

This GitHub repository is connected to Cloudflare Workers Builds. The production branch is `main`, and Cloudflare deploys the site with `npx wrangler deploy`.

When you commit and push a change to GitHub's `main` branch, Cloudflare automatically starts a deployment. **After the deployment succeeds, the live website will show the changes.** Changes made only on your computer, or pushed only to another branch, do not directly update the production site. A failed deployment must be fixed and deployed successfully before the live site changes.

You can check the deployment result in the Cloudflare dashboard under the Worker’s **Deployments** or **Builds** section. The live site may take a short time to reflect a successful deployment; a phone that has cached the menu may need to refresh or reconnect to the internet to fetch the latest files.

## Project files

- `index.html` — menu page structure and language controls.
- `style.css` — layout, colors, and responsive design.
- `script.js` — menu rendering, search, language selection, and item interactions.
- `data/menu.js` — menu categories, translated item names and descriptions, prices, and image references.
- `images/` — food and other image assets used by the menu.
- `qr-code.html` — page for displaying the menu QR code.
- `manifest.webmanifest` — installable web app metadata.
- `service-worker.js` — offline support and cached files for returning visitors.

## Updating menu items

1. Edit `data/menu.js` to update a dish or add one. Keep its translations together for Hebrew, Arabic, and English, set its category and price, and use an image path that exists in `images/`.
2. To add a new category, add the translated category labels and use the matching category key on its dishes.
3. Add new image files to `images/` and reference them using their relative path.
4. If you add a file that must be available offline, include it in the service worker’s `CORE_ASSETS` list and update its cache version (`CACHE_NAME`) in `service-worker.js`.
5. Preview the changes locally, then commit and push them to the `main` branch on GitHub.
6. Check Cloudflare’s deployment status. Once it succeeds, open the live website and refresh to confirm the update.

## Preview locally

From the repository folder, start a local web server:

```powershell
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in a browser. If Python is not installed, use another local static-file server.

## Offline use

The site includes a service worker so returning visitors can reopen a previously loaded menu when offline. On a visit with internet access, the browser checks for updated site files and refreshes its cache. The first visit still requires an internet connection to reach the live site. Browsers can retain cached files briefly, so refresh or reconnect if an update is not visible immediately.
