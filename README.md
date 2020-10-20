# Engagency Site Recreation

By Abe Biswas under [MIT License](./LICENSE).

## Table of Contents

- [Application](#application)
  - [Hosted Site](#hosted-site)
  - [Local Installation](#local-installation)
- [Assessing Requirements](#assessing-requirements)
- [Design and Development Process](#design-and-development-process)
  - [Design](#design)
    - [Wireframe](#wireframe)
    - [Mockup](#mockup)
    - [Final Application](#final-application)
  - [Development](#development)
    - [Dependencies](#dependencies)
    - [Project Structure](#project-structure)
    - [Tests](#tests)
    - [Deployment](#deployment)   
- [Revisiting Requirements](#revisiting-requirements)
  - [Additional Tasks](#additional-tasks)
  - [Best Practices](#best-practices)
- [Changelog](#changelog)

## Application

### Hosted Site

View application at [abe-eng.com](https://abe-eng.com/).

<p align="center">
  <img src="https://res.cloudinary.com/ab91/image/upload/v1602997961/gold-standard/default-placeholder-image.png" alt="Image Placeholder"/>
</p>

### Local Installation

To run locally, first install the necessary dependencies

```bash
npm install
```

Then, run the start script

```bash
npm start
```

The application will be running at `localhost:8000`

## Assessing Requirements

Below are the project requirements:
- [x] **Please recreate the design you see in the mockups provided.**
  - [x] **Use semantic HTML**
  - [x] **Make it responsive**
- [x] **Use the breakpoints from the Mockup file names and use a max-width container of 1200px**
- [x] **Configure the “Our Projects” link in the “Call to Action” Banner to open in a new window/tab**
- [x] **Please order each item differently based on screen size**
  - [x] **Desktop size**
  - [x] **Tablet size**
  - [x] **Mobile size**
- [x] **Use the following style guide and incorporate it into your finished project**
  - [x] **Main brand colors are: #E24301, #333333, and #FFFFFF**
  - [x] **Main Navigation Links should have a hover white underline of 3px**
  - [x] **Icon Features Header Text should have a hover color of #E24301**
  - [x] **Add a subtle box shadow below the Call to Action Banner**
- [x] **Clean up any other issues you may find**

Each of these requirements were satisfied, discussed at [Revisiting Requirements](#revisiting-requirements). The Design and Development process is discussed, generally, in the next section.

## Design and Development Process

### Design

As this application was to be based tightly on several mockup files, no new design work was completed for this project.

However, rough wireframes and an accurate Sketch file based on the mockup files were produced to consider development architecture and better understand the UI implemented in the mockup. See both products below.

#### Wireframe

<p align="center">
  <img src="https://res.cloudinary.com/ab91/image/upload/v1603139669/Engagency%20Project/wireframe.png" alt="Engagency Wireframe"/>
</p>

Made with [Lucidchart](https://www.lucidchart.com/). File available in Google Drive [here](https://drive.google.com/file/d/1ZKRtslne2_ScNrvlK6DMS68GzxMZiDM1/view?usp=sharing).

#### Mockup

<p align="center">
  <img src="https://res.cloudinary.com/ab91/image/upload/v1603139016/Engagency%20Project/sketch_mockup.jpg" alt="Engagency Mockup"/>
</p>

This is a Sketch recreation of the desktop-size mockup, with the larger buttons and Features converted to Sketch Symbols.

File available in Sketch Cloud [here](https://www.sketch.com/s/12329bd7-fca6-4e8a-aa9c-bb7e1904bc0b).

#### Final Application

<p align="center">
  <img src="https://res.cloudinary.com/ab91/image/upload/v1603199057/Engagency%20Project/final.png" alt="Final image"/>
</p>

View application at [abe-eng.com](https://abe-eng.com/).

### Development

#### Dependencies

UI Framework
- [React](http://reactjs.org) - JS library used to build interface

CSS
- CSS Grid and Flexbox (CSS framework not used)
- [styled-components](https://styled-components.com/) - CSS-in-JS library, with tools for breakpoints and themes
- [normalize.css](https://necolas.github.io/normalize.css/) - Used for CSS Reset

Build Environment
- [webpack](https://webpack.js.org/) - Module bundler
- [@babel/core](https://babeljs.io/) - JSX transpiler 
- [ESLint](https://eslint.org/) - Code linting
- [prettier](https://prettier.io/) - Code formatting

Misc
- [standard-version](https://github.com/conventional-changelog/standard-version) - Changelog generator that utilizes conventional commits to build changelog
- [react-css-burger](https://github.com/mattvox/react-css-burger) - React Burger Component
- [react-breakpoints](https://github.com/ehellman/react-breakpoints) - Used for conditional rendering ofcomponents based on screen size
- [@svgr/cli](https://github.com/gregberge/svgr) - Used for converting SVGs into React components for easy use

#### Project Structure

Project follows [Atomic Design](https://danilowoz.com/blog/atomic-design-with-react) methodology. This means: 
1. parent components contain child components, which contain child components, and so on, AND
2. corresponding directory hierarchy is as follows: `organisms/`, `molecules/`, and finally `atoms/`

#### Tests

A couple tests were written using the following technology:

- [Cypress](https://www.cypress.io/) - Used for E2E testing

Tests were used to confirm navigation links did not show when page was viewed on tablet or mobile.

To run the tests, first run `npm start` and then run `npm test` on a separate terminal.

#### Deployment

Application was deployed to Netlify, at [abe-eng.com](https://abe-eng.com/) (or [goofy-nightingale-e1d6ea.netlify.app](https://goofy-nightingale-e1d6ea.netlify.app/))


## Revisiting Requirements
Below are the project requirements and notes on completion:

- [x] **Please recreate the design you see in the mockups provided.**
  - [x] **Use semantic HTML**
    - `<header>`, `<section>`, `<nav>`, etc. used throughout code
  - [x] **Make it responsive**
    - Completed through use of `styled-components-breakpoint` package, which creates custom breakpoints for use with `styled-components` CSS-in-JS solution 

- [x] **Use the breakpoints from the Mockup file names and use a max-width container of 1200px**
  - Completed - breakpoints discussed below, container set to proper max width and centered
- [x] **Configure the “Our Projects” link in the “Call to Action” Banner to open in a new window/tab**
  - Completed with `target` and `href` attributes (conditionally set with React props)
- [x] **Please order each [Feature] item differently based on screen size**
  - [x] **Desktop size**
  - [x] **Tablet size**
  - [x] **Mobile size**
    - Completed by combining CSS Grid, the `order` css property, and `styled-components-breakpoint` package 
- [x] **Use the following style guide and incorporate it into your finished project**
  - [x] **Main brand colors are: #E24301, #333333, and #FFFFFF**
    - Used on appropriate elements 
  - [x] **Main Navigation Links should have a hover white underline of 3px**
    - Completed with use of `border` css properties and a margin. `text-underline-offset` works but is not fully cross-browser compatible currently.
  - [x] **Icon Features Header Text should have a hover color of #E24301**
    - Completed with use of `&:hover` pseudoclass in `styled-components-breakpoint`
  - [x] **Add a subtle box shadow below the Call to Action Banner**
    - Completed with `box-shadow` CSS property

- [x] **Clean up any other issues you may find**
    - Fixed a couple typos

### Additional Tasks 
The following tasks were also completed:
- [x] Comments added for clarity
- [x] Site deployed at [abe-eng.com](https://abe-eng.com/)
- [x] Wireframe and Sketch created
- [x] Basic UI tests making sure navigation links do not show when page is viewed on tablet or mobile
- [x] Added favicon
    
### Best Practices

Development adhered to following best practices:
- [x] Code compliant with Airbnb React/JSX Style Guide
- [x] CSS Reset for consistency across browsers
    - Completed with [normalize.css](https://necolas.github.io/normalize.css/)

## Changelog

Changelog available at [CHANGELOG.md](./CHANGELOG.md).