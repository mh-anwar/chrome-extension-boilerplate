# 📦️ Chrome Extension Boilerplate (Manifest V3)

<p align="center">
<a href="https://npmjs.com/package/chrome-extension-maker"><img alt="Chrome Extension Maker NPM Version" src="https://img.shields.io/npm/v/chrome-extension-maker">
<img alt="Node Current" src="https://img.shields.io/node/v/chrome-extension-maker">


## ⚡️ Get Started
```
npm run dev
```

## 🚨 Key Features
- Uses Manifest Version 3
- Faster and easier development with `web-ext`
- Performant builds with `web-ext` without unwanted files
- Development with both Firefox and Chromium in temporary profiles

## 📝 Notes:
- [`offline_enabled`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled), a key valid in Chromium, extensions does not work in Firefox
- Service Workers are supported in Chromium but not Firefox
  - The default Manifest may be slightly incorrect because it uses both `script` and `service_worker` tags to support Firefox and Chromium development
    - If you are solely testing for Chromium, `browser_specific_settings` and `background.scripts` can be removed from the `manifest.json` as they exist to maintain Firefox compatibility
- The favicon images were generated using [favicon.io](https://favicon.io/)
- In order to load a custom Chrome profile, to maintain flags, for example, set the `chromiumProfile` variable in `web-ext-config.mjs` to the path of your Chrome profile directory which can be found at `chrome://version/` in the `Profile Path` field or in these [Chromium Docs](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/user_data_dir.md)
- There are two different configuration files with `web-ext-config.mjs` being automatically loaded for Chromium when you run `npm run dev` and `firefox-config.js` being automatically loaded for Firefox when you run `npm run dev:firefox`

## 📄 Command Reference

### `npm run dev`
- Runs `web-ext run` and tests in Chromium

### `npm run dev:firefox`
- Runs `TMPDIR=~/tmp-dir/ web-ext run` and tests in Firefox

### `npm run build`
- Runs `web-ext build` and builds the extension for production to the `dist` folder for Chromium

### `npm run build:firefox`
- Runs `web-ext build` and builds the extension for production to the `dist` folder for Firefox

### `npm run lint`
- Runs `web-ext lint` to check for errors in the manifest and lint extension

### `npm run docs`
- Runs `web-ext docs` to open relevant documentation for `web-ext`

## 👔 License
This project is licensed under the MIT License.

## 📚️ Credits

This is a fork of [the archived chrome-extension-boilerplate](https://github.com/mh-anwar/mv3-extension-boilerplate) with changes that incorporate [web-ext](https://www.npmjs.com/package/web-ext) to make development easier and faster.
