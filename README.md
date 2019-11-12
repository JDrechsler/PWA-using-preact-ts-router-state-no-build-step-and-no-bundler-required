# preact / preact-router / state management / lazy loading - no build step / no bundler required

## Features

- pwa
- preact
- typescript
- preact router
- lazy loading
- state management
- no build step required
- no bundler required

ES6 modules and no bundler required thanks to the latest import maps flag in chrome

## No build step required

- if TypeScript is not needed
- I like TypeScript and I simply use tsc -w inside Visual Studio Code

## No bundler required with Google Chrome

- turn on the experimental flag for import maps
- node_modules folder is only used for typings

## Project size difference

- project size using a bundler: 2,633 files / 696 folders / 11.7MB
- project size without bundler: 15 files / 5 folders / 44.0KB

## Bundler like parcel/webpack required for all other browsers

- install parcel bundler npm install -g parcel-bundler
- node_modules folder is used for typings and as source for lib files for the bundler
- parcel index.html or parcel watch index.html or parcel build index.html (read more here: https://parceljs.org/)
