# NestedChecklist

## Background
This project started when I was working on a side project in 3D character modeling. I wanted to set up a to-do list that required some hierarchy, and could run locally on my machine (it's my private list and I don't want to pay for a service). A nested checklist sounded perfect for keeping track of things. I started setting up an Angular project that I could just run locally, but after a bunch of searching discovered that a nested checklist was not a standard *thing* in Angular Material. So... I made my own!

> [!NOTE]
> This was made for my own purposes. I may eventually make this into an NPM package, but only if people want it. Make an issue if so!

## Features
- Nested checklist built for Angular, using Angular Material checkboxes and Reactive Forms.
- Configure the contents of the nested checklist with a JSON file
- Functioning nested checklist
  - When an item is checked TRUE:
    - All of its children (and childrens' children) will become True
    - All parents above it will become True IF their children are all True
  - When an item is checked FALSE:
    - All of its children (and childrens' children) will become False
    - All parents above it will become False, since at least one of their children is False
- Updates local storage item called "checklist" as you interact with the checklist

## Configuration
### [config.json](src/assets/config.json)
``` json
{
    "checklist": INestedChecklistNode[]
}
```
### [nested-checklist-node.ts](src/app/modules/nested-checklist/models/nested-checklist-node.ts)
``` ts
export interface INestedChecklistNode {
    name: string,
    checked: boolean,
    children?: INestedChecklistNode[],
    index?: number, // assigned automatically
    parent?: number // assigned automatically
}
```
### [app.component.html](src/app/app.component.html)
`config$` is an `Observable<INestedChecklistNode[]>`
``` html
<nested-checklist [config]="config$"></nested-checklist>
```

## TODO
- Tests!
- More notes on implementation, how to adapt my code into your project etc
- make the component into an NPM package so you can easily install as a module into an Angular project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
