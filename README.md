<h1 align="center">
  Huntington Angels Network 😇
</h1>

This site was created using [Next.js](https://nextjs.org/docs/getting-started), a React-based static-site generator and the [Prismic CMS](https://prismic.io/). To see other project dependencies, check out the project's `package.json` file.

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

In the project directory is a file called `env_example`. This holds all of the necessary environment variables to create this project, including the Prismic access token.

Copy the file and add the values to the variables.

```sh
cp env_example .env.development
```
```sh
# In .env
PRISMIC_REPO_NAME=XXXXXXX
PRISMIC_ACCESS_TOKEN=XXXXXXX
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
Thanks to Gatsby's intense caching, when updating any data in the Prismic CMS interface, you must do two things for the updated content to show up in your GraphQL queries:

1. **Publish the document on Prismic!** This won't affect any current builds of the marketing site, as all of the data is queried and cached on build of the site.

2. **Restart the development server!** Gatsby only grabs data from Prismic on build, so the server must be restarted to grab the new data. -->

### Deploying to Netlify
To update the site, it needs to be deployed to Netlify. This can happen in a number of ways:

**Manual Deploy** The Tech Director goes into Netlify and manually creates a new deploy.

**Create a release in Prismic** Using the magic of webhooks, the site will automatically be deployed in Netlify whenever a new release is published in Prismic.

**Merging a Pull Request** Whenever a PR is merged into the master branch, Netlify will automatically deploy to keep the site up-to-date. Note: Upon creating and updating any PR, a `deploy preview` can be accessed from the bottom of the page - this doesn't affect the live site, but is very helpful to view and share code changes in production.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Next.js project.

    .
    ├── node_modules
    ├── pages
    ├── .gitignore
    ├── public
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/pages`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`/public`**: A directory that contains static files you may want to host. Things like images or icons can go here. Probably won't be used though since most files will be hosted from Prismic.
 
5. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

6. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Next.js

Looking for more guidance? Full documentation for Next.js lives [on the website](https://nextjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Next.js](https://nextjs.org/learn/basics/create-nextjs-app).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://nextjs.org/docs/getting-started).**



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
