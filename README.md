# Web Extension Boilerplate (Manifest V3)
This is a fork of [mv3-extension-boilerplate](https://github.com/mh-anwar/mv3-extension-boilerplate) with changes that incorporate `web-ext` to make development easier and faster. It also allows for development on Firefox and Chromium.

## Notes:
- [`offline_enabled`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled), a key valid in Chromium, extensions does not work in Firefox
- Service Workers are supported in Chromium but not Firefox
  - The default Manifest works best in Firefox (uses Firefox's supported background scripts key)