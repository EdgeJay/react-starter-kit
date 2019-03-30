# Development Logs

## 25 Mar 2019 - Add typescript-plugin-styled-components package

* Added `typescript-plugin-styled-components` package to `webpack.config.js` to ensure `styled-components` settings like `displayName` and `ssr` works fine in Typescript projects
* Improve theming

## 24 Mar 2019 - Grid animation

* Figured out how to animate grids
* Moved Grid and GridItem components into their own components
* Tweaked Typescript compiler config to allow ES module interoperability
* Added `classNames` package

## 20 Mar 2019 - Grid component enhancements

* Updated `Grid` and related components to use `grid` css property to organise page layout
  * https://developer.mozilla.org/en-US/docs/Web/CSS/grid
  * https://css-tricks.com/snippets/css/complete-guide-grid/
* Tweak other css rules

## 19 Mar 2019 - Write unit test in Typescript

* Added `ts-node` package which is needed for `ava` to be able to run unit tests written in Typescript
* Update `ava` config in `package.json` file to handle unit tests written in Typescript
* Create unit test file for `Grid` component in Typescript to test that configurations work

## 18 Mar 2019 - Update code based on tslint recommendations

* Renamed `store.js` to `store.ts` and updated code according to tslint recommendations
* Updated `awesome-typescript-loader` configuration to use babel for transpilation

## 17 Mar 2019 - Add tslint to project

* Added `tslint` and supporting configs containing linting rules (`tslint-config-airbnb`, `tslint-config-prettier`, `tslint-react`)
* `tslint-loader` is also imported into `webpack.config.js` so that Typescript files are properly linted before compilation
* All Typescript linting configuration are stored in `tslint.json` file
* Added `custom-tslint-formatters` to make tslint output in terminal more readable

## 9 Mar 2019 - Add Typescript to project

* For `react` and `react-dom` packages to work well with [Typescript](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html), the declaration files must be installed as well via `npm install @types/react @types/react-dom --save`
* Declaration files for other React packages (`@types/react-redux`, `@types/styled-components`) are also added as needed
* Converted `.js` files into Typescript files ending with `.ts` and `.tsx` extensions
* Imported `awesome-typescript-loader` package in `webpack.config.js` so that webpack can parse the Typescript files
* Added `tsconfig.json` file to setup compiler options (usually this is used by the standard `tsc` compiler tool used in Typescript projects, but it can also be used by other tools like `awesome-typescript-loader`, since this project uses babel and webpack to transpile and bundle code into JS files)
* Added `Hello` component to test that type checking in React component works

## 8 Mar 2019 - Add `styled-normalize` and themes

* [Styled-normalize](https://www.npmjs.com/package/styled-normalize) package which makes use of `createGlobalStyle` feature from `styled-components` to inject `normalize.css` into the project
* Setup default theme via [styled-components](https://www.styled-components.com/docs/advanced#theming)

## 7 Mar 2019 - Initial commit

* Cloned contents of `tdd-react-enzyme-demo` into new repository named as `react-starter-kit`
