React - Codevolution

what is react, why learn react, the fututre content for this channel.

## What
react is a library not a framework.
its focus is on UI, not routing, or http requests
has a rich ecosystem, plays well with other libraries, so it is capable of building full web applications

## Why
component based architecture
lets you break down your application into small incapsilated parts to them be used into a more complex UI framework
components let you have reuseable code. 
React is declarative. We tell react what we want and react dom build the UI for us.
React will efficiently handle the updating and rendering of the components.
DOM updates are handled gracefully in React.
React can be just a portion of a page, a complete page, or an entire application

Prerequisites
HTML, CSS, JavaScript fundamentals
ES6

JavaScript - 'this' keyword, filter, map, and reduce
ES6 - let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators, and destructuring assignment.

## Future React
- Fundamentals
- HTTP
- Routing
- Redux
- Utilities

## ReactJS Tutorial 2
Create-react-app
npx create-react-app <project-name>
npm package runner

## ReactJS Tutorial 3
package.json tells node what dependencies and scripts you will need to run this application
node modules is where all of the dependencies are installed. npm i
public folder holds the index.html file. we are building a single page application and this is the file.
scr folder is the main folder, index.js tells the 'root' in index.html that react will take it from here.
app.js is the next main file that we work with.

## ReactJS Tutorial 4
Compontents
it is a part of the user interface
the Root 'App' component is the entire component that contains all other components.
components is the code in a .js file.

stateless functional component 
javascript functions

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

stateful class components
class extending component class
needs a render method returning html

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

components describe a part of the user interface
they are re-usable and can be nested inside other components
two types
stateless functional components
stateful class components

## ReactJS Tutorial 5
Functional Components
- they are just javascript functions
- they can optionally receive an object of properties (props)
- and return html (jsx)

## ReactJS Tutorial 6
Class components
ES6 classes
can optionally receive props
and return html (jsx)

can also maintain a private internal state

Functional vs Class components

Functional
Simple functions
use Func components as much as possible
Absence of 'this' keyword
Solution without using state
Mainly responsible for the UI
Stateless, dumb, presentational components <!-- until hooks came around -->

Class
More feature rich components
maintain their own private date (state)
complex UI logic
provide lifecycle hooks
stateful, smart, container components

## ReactJS Tutorial 7
React hooks
makes it so that functions components can now also use state.

Hooks
No breaking changes, wont break old code, 100% backwards compatibility.
Still important to learn class components ands using state, lifecycle methods, and 'this' binding.

## ReactJS Tutorial 8
JSX
an extension to the javascript language syntax for
JSX make your react code simpler and elegant.

JSX differences
class => className
for => htmlFor
camelCase property naming convention
onclick => onclick
tabindex => tabindex

## ReactJS Tutorial 9
Props
short for properties
allows components to be dynamic

props are immutable (cannot change their value)
but if you can't change props, how do you maintain component data that may change over time.
## ReactJS Tutorial 10
State
2nd way to influence what is rendered on the screen.

Props vs State
props get passed to the component // state is managed within the component
(function parameters) // (vars declared in the function body)
parents own the props, cannot be changed by the children // state is managed within the component, so the component has full control.
props - functional components // usestate hook - functional components
this. props - class components // this.state - class components

both props and state hold informantion that can influence what is rendered on the screen.

## ReactJS Tutorial 11
setState

## ReactJS Tutorial 12
Destructuring props and state
unfinished
