# Blink — Motion Design Festival case study

Single-page case study of **Blink**, a motion design festival, built for the first assignment (PEC 01) of *Herramientas HTML y CSS II* at the [Universitat Oberta de Catalunya](https://www.uoc.edu).

- **Live site:** https://uoc-hcss-2-pec1.netlify.app/
- **Repository:** https://github.com/lcaballerogar/uoc-hcss-2-pec1

The project is built on [UOC Boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate) 3.14.0:

> UOC Boilerplate is a starter template for the HTML and CSS Tools courses from the [Master's Program in Multimedia Applications](https://estudis.uoc.edu/ca/masters-universitaris/aplicacions-multimedia/presentacio) and the [Master's Program in Web App and Website Development](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio) at the [Universitat Oberta de Catalunya](https://www.uoc.edu). It aims to provide a basic, modern frontend web development starter pack based on Parcel and including a Sass compiler, an ES6 transpiler, minifiers, an image transformer, and development tools.
>
> This is the 3.x version of UOC Boilerplate, available since the UOC 2020-2 semester.

## Requirements

[Node.js](http://nodejs.org/) >= 20.19 (developed with v26.10.0, see `.nvmrc`)

## Getting started

Clone this repository with `git clone`, or download a .zip file using the top right green button.

Using the Terminal, navigate to the project folder and run `npm install`. Then run `npm run dev` to start the development server at http://localhost:8123.

## Features

- Uses [Parcel v2](https://parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation (`@parcel/transformer-sass`).
- Transpilation of modern CSS synthax to support older bvrowsers, based on `browserslist`, including vendor prefixing and synthax lowering, with [PostCSS](https://postcss.org/) (`@parcel/transformer-postcss`).
- Minification and optimization of CSS files on production builds with [`lightningcss`](https://github.com/parcel-bundler/lightningcss) (`@parcel/optimizer-css`).
- Linting of SCSS files with [Stylelint](https://stylelint.io/), using `stylelint-config-recommended-scss`, `stylelint-config-recess-order` and custom rules (see `.stylelintrc`).

### HTML

- Minification and optimization of CSS files on production builds [`htmlnano`](https://github.com/posthtml/htmlnano) (`@parcel/optimizer-htmlnano`).
- [PostHTML](https://github.com/posthtml/posthtml) (`@parcel/transformer-posthtml`) features:
  - Include partial HTML files with [`posthtml-include`](https://github.com/posthtml/posthtml-include).

### Scripts

- Transpilation of modern JavaScript synthax to support older browsers, based on `browserslist`, with with [Babel](https://babeljs.io/) (`@parcel/transformer-babel`).
- Minification and optimization of JS code with [SWC](https://swc.rs/) (`@parcel/optimizer-swc`).

### Images

- Image transformation with [`sharp`](https://sharp.pixelplumbing.com/) ([`@parcel/transformer-image`](https://parceljs.org/recipes/image/)). Each image is stored once as a master file, and Parcel generates the responsive WebP versions used in `srcset` at build time (`?as=webp&width=…`).

### Dependencies

- [Phosphor Icons](https://phosphoricons.com/) (`@phosphor-icons/web`), imported in `src/assets/styles/_dependencies.scss`.

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

## How to use this project

Content lives inside the `src/` folder. If you do not want to change the configuration or are unsure about what you are doing, do not edit files outside the `src/` folder.

Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage.                                                                                                                     |
| `npm run stylelint` | Lints all SCSS files in `src/` with Stylelint. |
| `npm run build` | Runs Stylelint and stops if it finds an error. Then compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. This is also the build command to be run by external deployment services such as Netlify. The publishable files are then located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder and cache folders.                                                                                                                                                                                                                                                                                                               |
| `npm run test`  | Displays a success message if everything is working as expected.                                                                                                                                                                                                                                                                                                    |

## Code organisation

- **Architecture:** [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture), with one folder per layer in `src/assets/styles/`, imported in order from `main.scss`.
- **Naming:** BEM (`block__element--modifier`), without BEMIT prefixes.
- **Style guides:** [CSS Guidelines](https://cssguidelin.es/) for formatting and comments, and [Code Guide](https://codeguide.co/) for declaration and attribute order.

The technical report explains every decision in detail.

## Credits

- **Starter template:** [UOC Boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate) by Jordi Tarrida (v3.14.0).
- **Icons:** [Phosphor Icons](https://phosphoricons.com/) (`@phosphor-icons/web`), MIT License.
- **Fonts:** [Geist and Geist Mono](https://github.com/vercel/geist-font) by Vercel, SIL Open Font License 1.1 (see `src/assets/fonts/OFL.txt`).
- **Blink project:** visual identity, website and app design by Laura Caballero García, Andrea Donderis Delcamp and Elena Barrachina Barrachina.

## Author

Laura Caballero García — lcaballerogar@uoc.edu
