---
sidebar_position: 1
---

# Create Project From Template

## Clone all template from git

Get template **cra-template-ssc-campaign**:

```shell
git clone .......
```

## Install template

Install project from template:
:::note

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.

:::
### npx
```shell
npx create-react-app [app-name] --template file:../path/to/your/template/cra-template-ssc-campaign
cd [app-name]
```
*([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, [see instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))*

## Output
Running any of these commands will create a directory called [app-name] inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```shell
[app-name]
├── README.md
├── node_modules
├── package.json
├── tsconfig.json
├── config-overrides.js
├── .prettierrc
├── .prettierignore
├── eslintrc
├── eslintrcignore
├── .gitignoreư
├── mock-api
├   └── user
├       └── harvay
├          └── GET.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── __tests__
    ├── api
    ├── assets
    ├── components
    ├── features
    ├── services
    ├── store
    ├── untils
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js

```
No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:

```shell
cd [my-app]
```
## Scripts
Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` or `yarn test`
Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://create-react-app.dev/docs/running-tests)

### `npm run build` or `yarn build`
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

### `npm run lint` or `yarn lint`

Find `problems` in your code in `src` folder. Rule configured  in `.eslintrc` file.

### `npm run lint-fix` or `yarn lint-fix`

Fix `eslint` errors 

### `npm run format` or `yarn format`

Format file by `prettier`

You can read more about Create React App in [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)