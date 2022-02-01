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
