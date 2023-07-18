# Web Extension Boilerplate (Manifest V3)
This is a fork of [mv3-extension-boilerplate](https://github.com/mh-anwar/mv3-extension-boilerplate) with changes that incorporate `web-ext` to make development easier and faster. It also allows for development on Firefox and Chromium.

## Notes:
- [`offline_enabled`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled), a key valid in Chromium, extensions does not work in Firefox
- Service Workers are supported in Chromium but not Firefox
  - The default Manifest works best in Firefox (uses Firefox's supported background scripts key)
- The favicon images were generated using [favicon.io](https://favicon.io/)

## Getting Started

### `npm run dev`
- Runs `TMPDIR=~/tmp-dir/ web-ext run` and tests in Firefox

### `npm run dev:chromium`
- Runs `web-ext run` and tests in Chromium

### `npm run dev-no-tmp`
- Runs `web-ext run` and tests in Firefox without creating a temporary profile

### `npm run build`
- Runs `web-ext build` and builds the extension for production to the `dist` folder

### `npm run lint`
- Runs `web-ext lint` to check for errors in the manifest and lint extension