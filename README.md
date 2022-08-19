# cyoa-typescript-todolist

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
2. `"module": "es6"` =>

_index.html_

1. `<script src="destination/script.js" defer></script>`
