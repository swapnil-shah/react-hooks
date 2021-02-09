# React Hooks
~`
## Hooks Introduction

### What are Hooks

Hooks are new feature addition in react version 16.8 which allows you to use react features without having to write a class.
Hooks dont work inside classes

### Why Hooks

**Reason 1**

- Understand how this keyword works in JavaScript
- Remember to bind event handlers in class components
- classes don't minify very well and make hot reloading very unreliable

**Reason 2**

- There is no particular way to reuse stateful component logic
- HOC and render profs patterns do address this problem
- Code harder to follow

**Reason 3**

- Create components for complex scenarios such as data fetching and subscribing to events
- Related code is not organized in one place

### Noteworthy Points

- hooks are completely opt-in you don't have to learn or use hooks if you don't want to
- hooks don't contain any breaking changes and the release is 100% backwards compatible
- Classes won't be removed from React
- Can't use hooks inside a class component but your app can definitely mix classes and functional components
- Hooks don't replace your existing knowledge of react concepts instead hooks provide a more direct API to the react concepts you already know such as props state context refs and life cycle

### Rules of Hooks

- **Only called hooks at the top level**. Don't call hooks inside loops conditions or nested functions
- **Only call hooks from react functions**. Call them within react functional components and not just any regular JavaScript function
  

## useState
This hook accepts an argument which initial value of state property and returns current value of state property and a method which is capable to update the current value of state property

Default value is never used in re-renders

When you have to update state based on the previous state state, pass in the prev state value to state setter