# Cub Pack Site

This is a simple site developed to give a Cub Scout Pack a public facing presence while attempting to limit overhead
for the non-technical types. The idea behind it was to leverage existing data (and - failing that - a CMS) so that the 
pack's public facing site stays up to date without anyone needing to dive into the code.

Currently, for security reasons, the client application should have a corresponding 
[back end](https://github.com/robdesisto/cub-site-backend) to proxy calls to the data providers to keep OAuth tokens on 
server. In my app they are decoupled so that I can deploy my client to Netlify's CDN, but that is just me. Feel free to 
take that example, host the server and client together, or come up with a much more elegant way to manage all that (and 
please tell me about it).

## Tools

* [Bootstrap](https://getbootstrap.com/)
* [Jasmine](https://jasmine.github.io/)
* [Karma](https://karma-runner.github.io/2.0/index.html)
* [Material Icons](https://material.io/icons/)
* [SASS](http://sass-lang.com/)
* [Standard Version](https://github.com/conventional-changelog/standard-version)
* [TypeScript](https://www.typescriptlang.org/)
* [Vue](https://vuejs.org/) - along with [Vuex](https://vuex.vuejs.org/en/intro.html) (Redux for Vue) and the [Vue Router](https://router.vuejs.org/en/)
* [Webpack](https://webpack.js.org/)

## Getting Started

For the project on Github, clone your version of it, and change all the things.

* package.json - to match the specifics of your project
* AppConstants in src/app/store - to match the specifics of your pack and content management strategy.

Run: ````npm install````

Then:  ```npm start``` starts the webpack dev server defaulted to port 8122.

And use the following commands as needed:

* ```npm run lint``` lints both the SASS and TS

* ```npm run build``` builds the project as it is in development, but to disk

* ```npm run build:prod``` builds the app in production mode (minified and whatnot).

* ```npm run release``` let's standard version do it's thing.

* ```npm run test``` I'm putting this here to guilt myself into writing tests soon.

### Compression

Netlify automatically compresses assets (as does HapiJS on the back end if you wanted to use it to serve the client),
so gzipping is not included as a build step. That said, in production, the application and style combine for about 80kb
when gzipped, so it is light and fast.
