# TeXbld website

Vite + React Website for TeXbld. Has a basic landing page and will have
documentation.

## Setup

You should have nodejs and yarn on your system. Clone this repository and run
`yarn`.

To spin up the development server, run `yarn dev`, and to create a production
build, run `yarn build`.

## Writing Documentation

Documentation is stored in the form of mdx files in `./src/docs/markdown/`.
In order to register a new markdown file, add it to the array in
`./src/docs/routes.ts`.
