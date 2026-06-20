# Taste House QR Menu

A simple mobile-first restaurant QR menu for a shawarma restaurant. This is a first test version with sample items and placeholder online images. Real menu items, food photos, prices, logo, colors, and contact details can be added later.

## Files

- `index.html` - page structure
- `style.css` - responsive styling
- `script.js` - filtering, search, and item modal
- `data/menu.js` - editable menu item data

## Open Locally

Open `index.html` in a browser, or run a local server from this folder:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## QR Code

To scan this from a phone, the site needs a URL your phone can reach. During development, run a local server and use your computer's local network IP address, for example:

```text
http://192.168.1.20:8080
```

For real customers, publish the folder to GitHub Pages, Netlify, Vercel, or Firebase Hosting and create a QR code for the published URL.

## Offline Support

This menu includes a service worker and web app manifest. After a phone opens the published menu once with internet, the main menu files are cached and can open again even if the connection drops.

When the phone has internet, the menu checks the live website first. If files such as `data/menu.js`, `style.css`, or `index.html` changed, the newer version is downloaded and saved into the cache. If there is no connection, the phone uses the last saved cache.

Important limitation: the very first QR scan still needs a reachable URL. For a restaurant QR code that works on any Wi-Fi or mobile data, publish the site online and generate the QR code for that public URL.

If you need the first scan to work with no internet at all, the restaurant must provide a local network option, such as a small computer/tablet/router hosting the menu and a QR code pointing to that local address. Customers would need to connect to that restaurant Wi-Fi first.
