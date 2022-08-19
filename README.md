# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

<!-- ------------------------------------TYPESCRIPT SETUP---------------------------------------- -->

# install typescript

`npm init --y` =>
`npm i --save-dev typescript` => installs typescript as a dependency
`npx tsc --init` => creates tsconfig.json

# typescript setup

_/destination/_

1. create destination folder

_package.json_

1. `"scripts": { "start": "tsc --watch" }`
2. `npm start` will run tsc --watch

_tsconfig.json_

1. `"outDir": "./destination"` => anything in our .ts file will be created here instead
2. `"module": "es6"` => allow modules

_index.html_

1. `<script src="destination/script.js" defer></script>`

# modules problem

1. If we need modules, typescript throws errors with imports
2. To solve this, _tsconfig.json_ and change `"module": "es6"`
3. Still have error since browser doesn't know how to access modules folder!
4. [Solution]: bundler to bundle node_modules so browser can understand them

<!-- ------------------------------------SNOWPACK SETUP---------------------------------------- -->
<!-- SNOWPACK is a bundler that will allow our browser to deal with modules -->

0. Delete all files
1. `npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force`
2. _package.json_ => only keep "start" and "build" scripts
3. [DELETE] _.prettierrc_ since we already have the prettier extension installed
4. [DELETE] _/public/index.css_, _/public/favicon.ico_, _/public/logo.svg_
