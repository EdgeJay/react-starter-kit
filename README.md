# react-starter-kit
Template project to kickstart new React projects

## Setup

### System requirements

* Node.js v10.14+
* React.js v16.8+

### nvm

It is highly recommended to use `nvm` with this project, the `.nvmrc` file is already defined in this project, just run `nvm use` command to switch to required Node.js version.

## Getting started

1. Copy `/deploy/local/dotenv` file into project root folder and rename to `.env`.
2. For the GOOGLE_API_KEY field in .env file, you need to provide your own [Google API key](https://developers.google.com/console/help/generating-dev-keys) for the project to work properly. 
3. `npm install`
4. `npm start`

### babelrc

.babelrc file is used for unit tests only. A similar copy of babel config can be found in `webpack.config.js`, and that should be used as source of truth.

## Production build

### How to test production build?

1. Create production build using `npm run build`
2. Execute `npm run start:build` to run website locally (you must install `http-server` first using `npm install http-server -g`)
