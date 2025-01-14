# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop occurs due to incorrect usage of the `useEffect` hook.

## The Bug
The `bug.js` file contains a component with a `useEffect` hook that attempts to update the state variable `count` within its own dependency array. This creates a loop where the effect constantly runs, causing the component to re-render infinitely.

## The Solution
The `bugSolution.js` file provides a corrected version of the component. The solution avoids the infinite loop by using functional updates or removing the dependency of `count` from the useEffect's dependency array and using the `useRef` hook to track the count if needed. 

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the browser's console.  The solution version will not have this problem.
