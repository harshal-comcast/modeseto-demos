# modeseto-demos
A place for sharing code snippets, demos while exploring es6, TypeScript, Angular 2, and a slew of other emerging JavaScript technologies.

## Tooling

This project relies on npm, webpack, Angular 2, and TypeScript, along with a few plugins for each.

## Getting Started

1. `npm install`
2. `npm run start` // dev mode

Alternatively, for a "production" build, you can run 
2. `npm run build`

Builds are created using webpack and several of its plugins. The plugins essentially create bundles based on `import` statements.
Webpack also runs rollup to discard unnecessary or duplicate dependencies. 

## Goals

Concretely, this project attemps to demonstrate not only es6, Angular 2, and TypeScript, but also:

 - AOT compilation
 - Electron integration
 - Angular Material components
 - NativeScript/Ionic 2 support
 - AngularFire2

## Suggestions

Have a suggestion for a change or improvement? Drop a line or open an PR! This is a flexible, evolving demo project. 
We don't expect to hit everything at once, but the aim will always be to thoroughly investigate emerging JavaScript technologies and best practices. 
