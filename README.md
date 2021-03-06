# React Hooks
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

- Hooks are completely opt-in you don't have to learn or use hooks if you don't want to
- Hooks don't contain any breaking changes and the release is 100% backwards compatible
- Classes won't be removed from React
- Can't use hooks inside a class component but your app can definitely mix classes and functional components
- Hooks don't replace your existing knowledge of react concepts instead hooks provide a more direct API to the react concepts you already know such as props state context refs and life cycle

### Rules of Hooks

- **Only called hooks at the top level**. Don't call hooks inside loops conditions or nested functions
- **Only call hooks from react functions**. Call them within react functional components and not just any regular JavaScript function
  

## `useState`
- This hook lets you add state to functional components. By calling you state inside a functional component you are creating a single
piece of state.
- In classes the state is always an object you can store properties on that object. With the `useState` hook the state doesn't have to be an object it can be an array a number, boolean, string etc
- The you state hook returns an array with two elements  - the first element is the current value of the state and the second element is a state setter function you call the setter function with a new value to set the state which will in turn cause the component to rerende
- In case your new state value depends on the previous state value you can pass a function to the setter function the setter function will receive the previous state as its argument.
- This hook accepts an argument which initial value of state property and returns current value of state property and a method which is capable to update the current value of state property
- When dealing with objects or arrays always make sure to spread your state variable and then call the setter function to get the expected behavior
- Default value is never used in re-renders

## `useEffect`
-  `useEffect` hook lets you perform **side effects** in **functional components**
-  It is a close replacement for **componentDidMount() componentDidUpdate()** and **componentWillUnmount()** that's right three lifecycle methods can be handled by the `useEffect` hook
-  `useEffect` is called at every render unless you specify a dependency array. To call once in intial render, pass an empty array as 2nd parameter.
-  When you want to execute some component cleanup code you include it in a function and return that function from the function passed to useEffec. The cleanup code can be canceling subscriptions timers or even removing event handlers
- Dependency array should be thought of as a way to let react know about everything that the effect must watch
- Sometimes you might want to call a function with a `useEffect` so function do something. Whenever you need to call a function within `useEffect` just go ahead and define the function within the `useEffect`. See below example
```
`useEffect`(() => {
  function doSomething() {
    console.log(someProp)
  }
  doSomething()
  const interval = setInterval(tick, 1000)
  return () => {
    clearInterval(interval)
  }
}, [someProp])
```

## `useContext`

### What is Context API
Context comes into picture context provides a way to pass data through the component tree without having to pass props down manually at every level

### How does it work?
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbkEodXNlcm5hbWUpXG5CKEFwcCBDb21wb25lbnQpOjo6YWN0aXZlXG5CIC0tPnx1c2VybmFtZXwgQ1tBXTo6OmluYWN0aXZlXG5CIC0tPnx1c2VybmFtZXwgRFtCXTo6OmluYWN0aXZlXG5CIC0tPnx1c2VybmFtZXwgRVtDXTo6OmFjdGl2ZVxuRCAtLT58dXNlcm5hbWV8IEdbRF06OjppbmFjdGl2ZVxuRSAtLT58dXNlcm5hbWV8IEhbRV06OjphY3RpdmVcbkggLS0-fHVzZXJuYW1lfCBJW0ZdOjo6YWN0aXZlXG5cbmNsYXNzRGVmIGFjdGl2ZSBmaWxsOiM3ZjQ0YWYsIGNvbG9yOiNmZmZmZmY7XG5jbGFzc0RlZiBpbmFjdGl2ZSBmaWxsOiM5OUM5NTUsIGNvbG9yOiNmZmZmZmYsIHN0cm9rZTojNkFBRjdEO1xuc3R5bGUgQSBmaWxsOiMwMkFCRkEsY29sb3I6I2ZmZmZmZiwgc3Ryb2tlOiMwMkFCRkE7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbkEodXNlcm5hbWUpXG5CKEFwcCBDb21wb25lbnQpOjo6YWN0aXZlXG5CIC0tPnx1c2VybmFtZXwgQ1tBXTo6OmluYWN0aXZlXG5CIC0tPnx1c2VybmFtZXwgRFtCXTo6OmluYWN0aXZlXG5CIC0tPnx1c2VybmFtZXwgRVtDXTo6OmFjdGl2ZVxuRCAtLT58dXNlcm5hbWV8IEdbRF06OjppbmFjdGl2ZVxuRSAtLT58dXNlcm5hbWV8IEhbRV06OjphY3RpdmVcbkggLS0-fHVzZXJuYW1lfCBJW0ZdOjo6YWN0aXZlXG5cbmNsYXNzRGVmIGFjdGl2ZSBmaWxsOiM3ZjQ0YWYsIGNvbG9yOiNmZmZmZmY7XG5jbGFzc0RlZiBpbmFjdGl2ZSBmaWxsOiM5OUM5NTUsIGNvbG9yOiNmZmZmZmYsIHN0cm9rZTojNkFBRjdEO1xuc3R5bGUgQSBmaWxsOiMwMkFCRkEsY29sb3I6I2ZmZmZmZiwgc3Ryb2tlOiMwMkFCRkE7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

#### Three Steps to create the context
Before using `useContext` Hook
- Create the context
- We need to provide this context with a value and the provider must wrap the children components for the value to be available
- Consume the context value

With `useContext`
- Create the context
- We need to provide this context with a value and the provider must wrap the children components for the value to be available
- To Consume
  - import `useContext` from react
  - import necessary context
  - call the `useContext` function by passing in the context as argument


## `useReducer`

### What is `useReducer`?
It is a hook that is used for state management. It is an alternative to `useState`. This hook is based on Javascript reduce.

### Javascript Reduce
The **reduce()** method executes a **reducer** function (that you provide) on each element of the array, resulting in single output value.

The reduce method takes two parameters the first parameter is the reducer function and the second parameter is an initial value that the reducer function can make use of. The reducer function itself again accepts two parameters and reduces them down to a single value and then returns that value.

In below example the reducer takes two values and returns one value which is the summation.

```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

Combine `useReducer` and `useContext` when state needs to be shared between components i.e. Global state management

### Javascript Reduce vs `useReducer`
There is a huge similarity between these 2
| Javascript Reduce                           | `useReducer`                                                 |
| ------------------------------------------- | ------------------------------------------------------------ |
| array.reduce(reducer, initialValue          | `useReducer`(reducer, initialState                           |
| singleValue=reducer(accumulator, itemValue) | newState = reducer(currentState, action                      |
| reduce method returns a single value        | `useReducer` returns a pair of values - [newState, dispatch] |

### How to use it?
#### Step 1
Import `useReducer` from React

#### Step 2
- Just like the other hooks userReducer is also a function we simply have to call it in the functional component
- `useReducer` accepts two arguments
  - reducer function
  - initial state
- Define **reducer function** outside the functionl component
  - A reducer function accepts 2 values and returns 1 value(new state)
  - The 2 values accepted are current state and action. 
  - A reducer function accepts the current state and returns the new state
  - For this transition to happen, we will need something. That something is action paramater. 
  - Think of action as an instruction to the reducer function based on what the action specifies the reducer function performs the necessary state transition
- The convention to execute code based on the action is to use switch statement

#### Step 3
We need to get hold of a value to display in the JSX and we also need a way to call the reducer function with the appropriate action.
Similarly to `useState`, userReducer also returns a pair of values which we can get hold off using the array destructuring.

> When dealing with multiple state variables that have the same state transitions, it is a good idea to have multiple useReducers making use of the same reducer function this will avoid the complexity of merging the state. If it were to be an object and also prevents us from duplicating code in the reducer function.

##  `useState` vs `useReducer`
If both you `useState` and `useReducer` are meant for state management when should we use one over the other?
| Scenario                         | `useState`                | `useReducer`           |
| -------------------------------- | ------------------------- | ---------------------- |
| **Type of State**                | Number, Boolean or String | Object or Array        |
| **Number of state transitions**  | One or two                | Too many               |
| **Related to state transitions** | No                        | Yes                    |
| **Business logic**               | No business logic         | Complex business logic |
| **Local vs global**              | Local                     | Global                 |


##  `useCallback`
#### What?
`useCallback` is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
> **React.memo** is a higher-order component that will prevent a functional component from being rear-ended if it's props or state do not change please keep in mind react dot memo has nothing to do with hooks

#### Why?
It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders

#### How?
- Import `useCallback` from React
- We need to call useCallback which accepts a callback function as its first parameter and then array of dependencies as its second parameter

#### Why not use the callback hook every single time?
- Please visit [Kent Dodd's blog post](https://kentcdodds.com/blog/usememo-and-usecallback/) to understand why using callback all the time is not a good idea.

##  `useMemo`
useMemo is a hook that will only recompute the cached value when one of the dependencies has change. This optimisation heads to avoid expensive calculations on every render.

###  `useCallback` vs `useMemo`
useCallback caches the provided function instance itself whereas useMemo invokes the provided function and caches its result. So if you need to cache a function use useCallback and when you need to cache the result of an invoked function use useMemo.

## `useRef`

`useRef` hook is used imperatively access DOM nodes in react functional components.

Although useRef can hold a reference to a DOM node using the ref attribute, it can also be used to store any mutable value and what is great about useRef is that the value will persist through the rerenders while also not causing any additional renders when its value changes.

### How to use?

#### Step 1
import useRef from React 
```
import React, { useEffect, useRef } from 'react'
function FocusInput() {
  ...
}
export default FocusInput
```
#### Step 2
Create a ref variable by calling useRef and passing in the initial value
```
import React, { useEffect, useRef } from 'react'
function FocusInput() {
  const inputRef = useRef(null)
  ...
}
```
#### Step 3
Once we create the ref we need to attach it to the *input* element and to attach a ref we make use of the reserved ref attribute. So on the *input* element ref is equal to *input* ref that is the name of reference variable.
```
function FocusInput() {
  const inputRef = useRef(null)
  useEffect(...)
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}
```
#### Step 4
Call the method on the input element
> Where did this ***current*** property come from?
> 
> That is just something react does. React will set the refs current property to the corresponding DOM node. Hence this is how you actually access the input element.
```
function FocusInput() {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}
```

## `Custom Hook`

Tasks
- Keep track of account value
- After every render update the document title to the current count value
  
`<DocTitleOne />`

```
function DocTitleOne() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </div>
  )
}
export default DocTitleOne
```

`<DocTitleTwo />`

```
function DocTitleTwo() {
  ...
}
export default DocTitleTwo
```
We are repeating the same logic in both the components <DocTitleOne /> <DocTitleTwo />
Imagine if we want to have ten different components that update the document title. We definitely don't want to be repeating the code. This is where a custom hook makes perfect sense.

In our above example(<DocTitleOne /> <DocTitleTwo />) we can create a custom hook that extracts the logic of updating the document title. We can then reuse the same custom hook in different components.

We can create a custom hook that extracts the logic of updating the document title. We can then reuse the same custom hook in different components.

Custom hook should start with the word ***use*** it is a convention and also your linters rely on this word to determine whether rules of hooks apply to the function or not.

`<useDocumentTitle />`
```
  import React, { useEffect } from 'react'
  function useDocumentTitle(count) {
    useEffect(() => {
      document.title = `Count ${count}`
    }, [count])
  }
  export default useDocumentTitle
```
Now replace `useEffect` with `useDocumentTitle`
```
import useDocumentTitle from './useDocumentTitle'
function DocTitleOne() {
  ...
  useDocumentTitle(count)
  ...
}
```