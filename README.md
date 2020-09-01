<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
  <a href="https://www.wordpress.org">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/wordpress/wordpress.png" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby & WordPress
</h1>

# Project: AMAC Kampfkunst
WordPress as Backend z.B _backend.amac-kampfkunst.de_ (Not for Searchengines open!) <br />
And the Gatsby Site connected with the WordPress Site mirror the content with awesome react features (hosted on netlify)


> Want to build a template for other wp-react projects from this code
## Project architecture:
1. Backend: Wordpress + Plugins(WP Gatsby + WP GraphQL) as headless cms
2. Plugin pulls data from Wordpress Rest API and converts it to GraphQL-data
3. Frontend: Gatsby - GraphQL data can be queried from there
4. Figma for Prototyping https://www.figma.com/files/team/881944080226292116/AMAC-Kampfkunst

## Environment Files

### development
GATSBY_GRAPHQL_IDE=playground //for advanced graphQL-IDE. to be accessed on route "/___graphql"


## Install

1. Install node modules: `npm i` / `yarn install`
2. Run gatsby: `gatsby develop` / `yarn start` (dev: env-cmd -f ./.env.development) 
3. Run a WordPress Site...
4. Add your wordpress url in the gatsby-config.js file

## Configuration

### Styling: SASS
**Files:** <br />
`/src/style/all.scss` <br />
Here are all sass-files importet: utils like `variables.scss`, `colors.scss`, `breakpoints.scss` and components like `button.scss` ... <br />
For every new component you have to create a scss file in this folder: `/src/style/components/` <br />
**colors.scss:** <br />
Every color declared on the top and used by components seperated with logical variable-names like _'$button-text-default'_ or _'$button-text-hover'_ <br />
**variables.scss:** <br />
Here you add values like the height of the NavigationBar or Primary Font-Family name... <br />
**breakpoints.scss:** <br />
this function makes it easy to set up a breakpoint:
```SASS
.Button {
  font-size: 18px;

  @include bp(medium2) {
    font-size: 22px;
  }
```

### Fonts
Add new google-fonts: Add in gatsby-config.js file and to the variables.scss to use it on components

### Pages
Now WordPress page-content can be used from `/templates/page.js` with GraphQL

### Posts
..And post-content from `/templates/post.js

## Links

How to use Gatsby <-> WordPress
- https://www.youtube.com/watch?v=etii9yp1J6s

New gatsby-wordpress Plugin with 'wpgraphql'
- https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/#readme

ACF for React?!
- https://dev.to/nevernull/pagebuilder-with-acf-flexible-content-guide-to-gatsby-wordpress-starter-advanced-with-previews-i18n-and-more-2lf4
