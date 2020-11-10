# React overview
## Creating react application
Run:
```
npx create-react-app todos-app
```

## Exploring the generated project
Examining the project structure.

Clean up the default project setup.

## Exploring JSX

Explain the function of tags, attributes etc.
Explore how the JSX actually compiles on BABEL REPL.

## Exploring class-based components

How to create a class-based component, manage the state of such component and access the lifecycle hooks.

## Exploring the renredering triggers and DOM updates

Create an app that updates every 500 milliseconds (in the constructor) and shows the current date and time. Check out how the DOM is updated.

## Exploring the lifecycle methods

Explore lifecycle methods.

## Exploring functional components and hooks

How to create a functional component and manage the state of such a component.
Code separation and reuse by separating the hooks into their own modules.

## Render the children

Demonstrate how to render the children components.

## Render props

Demonstrate rendering the props.

## Conditional rendering

Use the ternary operator to decide on whether to render the component or not.

## "Loop" the components with `map`

Use array mapping to loop the components.

## Using refs to access DOM elements
Create a ref:
```javascript
const textInput = useRef(null);
// access with .current
//...
<input type="text" ref={textInput}/>
```

## Installing SASS
Do **not** use `node-sass` since it's deprecated and install Dart SASS:
```
npm install sass --save-dev
```
Rename and import `App.scss` file.
and explore the possibility of using variables.

Also install the `classnames` package

## Exploring SCSS and (S)CSS modules
Rename and import the `App.module.scss` file and log the output.

## Prop-types package

Install and set-up the prop-types package.