<h1 align="center">
  Huntington Angels Network 😇
</h1>

This site was created using [Gatsby](https://www.gatsbyjs.org/docs/), a React-based static-site generator and the [Contentful CMS](https://www.contentful.com/developers/docs/). To see other project dependencies, check out the project's `package.json` file.

## Getting Started

1. Clone the repository: 

```bash
git clone git@github.com:Scout-NU/han-site.git
```

2. Change directories:

```bash
cd han-site
```
3. Set up environment variables

In the project directory is a file called `env_example`. This holds all of the necessary environment variables to create this project, including the Contentful access token.

Copy the file twice, name the new files .env.development and .env.production, and add the Contentful API keys to the variables. You can find these API keys in your Contentful space under Settings -> API keys -> HAN-site. You only need to use Space ID and Content Delivery API - access token.

```sh
cp env_example .env.development
```
```sh
# In .env
CONTENTFUL_SPACE_ID=''
CONTENTFUL_ACCESS_TOKEN=''
```

4. Install the npm modules

```bash
# Inside the project directory
npm install
```

Run the server

```bash
npm run dev
```

It will likely start on http://localhost:8000. When you make changes, the site will auto-refresh and display your changes.

<!-- ### Updating CMS
Thanks to Gatsby's intense caching, when updating any data in the Contentful CMS interface, you must do two things for the updated content to show up in your GraphQL queries:

1. **Publish the document on Contentful!** This won't affect any current builds of the marketing site, as all of the data is queried and cached on build of the site.

2. **Restart the development server!** Gatsby only grabs data from Contentful on build, so the server must be restarted to grab the new data. -->

### Deploying to Netlify
To update the site, it needs to be deployed to Netlify. This can happen in a number of ways:

**Manual Deploy** The Tech Director goes into Netlify and manually creates a new deploy.

**Create a release in Contentful** Using the magic of webhooks, the site will automatically be deployed in Netlify whenever a new release is published in Contentful.

**Merging a Pull Request** Whenever a PR is merged into the master branch, Netlify will automatically deploy to keep the site up-to-date. Note: Upon creating and updating any PR, a `deploy preview` can be accessed from the bottom of the page - this doesn't affect the live site, but is very helpful to view and share code changes in production.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── env_example
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.


## Developers on this project!

### Angelina Han

_Email_: [han.ang@northeastern.edu](mailto:han.ang@northeastern.edu)

### Erin Wang

_Email_: [wang.erin@northeastern.edu](mailto:wang.erin@northeastern.edu)


## About Scout

<p align="center">
  <img src="https://web.northeastern.edu/scout/wp-content/themes/scout/images/logo.png" alt="Scout Logo" />
</p>

Scout is Northeastern University's student-led design studio. The Studio has about 45 members selected via interview and application processes to select the university's best talent. Each semester the studio produces design and development assets for four ventures. Check out our [portfolio](https://web.northeastern.edu/scout/portfolio) for some past projects!
