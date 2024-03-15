# Web Extension Boilerplate (Manifest V3)
This is a fork of [chrome-extension-boilerplate](https://github.com/mh-anwar/mv3-extension-boilerplate) with changes that incorporate [web-ext](https://www.npmjs.com/package/web-ext) to make development easier and faster.

## Key Features
- Uses Manifest Version 3
- Faster and easier development with `web-ext` 
- Performant builds with `web-ext` without unwanted files
- Development with both Firefox and Chromium in temporary profiles

## Notes:
- [`offline_enabled`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled), a key valid in Chromium, extensions does not work in Firefox
- Service Workers are supported in Chromium but not Firefox
  - The default Manifest may be slightly incorrect because it uses both `script` and `service_worker` tags to support Firefox and Chromium development
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

### `npm run docs`
- Runs `web-ext docs` to generate documentation for the extension