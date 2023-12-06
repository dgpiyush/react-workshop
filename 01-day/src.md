# Section 1: JavaScript Basics

## Variables and Data Types
- **Definition:** Containers for storing data values.
- **Types:** Primitive (string, number, boolean, null, undefined) and Object (object, array, function).
- **Declaration:** `var`, `let`, or `const`.

## Functions and Scope
- **Definition:** Blocks of reusable code.
- **Scope:** Local and global scopes. Variables defined inside functions are local.
- **Declaration:** `function` keyword.
- **Highorder & Callback:** A function that takes function as a parameter is Highorder and the function we are passing to the function is Callback function.

## Arrays and Objects
- **Arrays:** Ordered lists of values. Index starts at 0.
  ```javascript
  const fruits = ['apple', 'orange', 'banana'];
  console.log(fruits[0]); // 'apple'
  console.log(fruits[1]); // 'orange'
  console.log(fruits[2]); // 'banana'
- **Objects:** Key-value pairs. Keys are strings.
  ```
  const person = {
  name: 'John Doe',
  age: 30,
  city: 'Example City'
  };
  console.log(person.name); // 'John Doe'
  console.log(person.age); // 30
  console.log(person.city); // 'Example City'
  ```

## ES6 Features
- **Arrow Functions:** Concise syntax for function expressions.
- **Destructuring:** Extracting values from arrays or objects.
- **Spread/Rest Operator:** Spread for array elements, rest for function parameters.
- **Map:** A method that creates a new array by applying a function to each element in the original array.
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map(num => num * num);
    console.log(squared); // [1, 4, 9, 16, 25]
    ```
- **Filter:** A method that creates a new array with elements that satisfy a provided condition.
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // [2, 4]
    ```
- **Reduce:** A method that reduces an array to a single value by applying a function to each element and accumulating the result.
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    console.log(sum); // 15
    ```

    

# Section 2: Why React?

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

## Introduction to React and its importance
- **Definition:** A JavaScript library for building user interfaces.
- **Developed by:** Facebook.
- **Characteristics:** Declarative, efficient, flexible.

## Advantages of using React in web development
- **Component-Based:** Reusable and maintainable code.
- **Virtual DOM:** Optimizes rendering for better performance.
- **One-way Data Binding:** Predictable data flow.
- **Large Ecosystem:** Abundance of libraries and tools.

# Section 3: Setting up a React Project

## Installing Node.js and Create React App
- **Node.js:** JavaScript runtime for server-side development.
- **Create React App:** Command-line tool for creating React projects.

## Initializing a new React project
- **Command:** `npx create-react-app your-app-name`.
- **Run Development Server:** `npm start`.

# Section 4: Component-Based Architecture

## Understanding the basics of component-based architecture in React
- **Components:** Independent, reusable pieces of UI.
- **Data Passing:** Props for data, State for local component data.

# Section 5: Homework Assignment

## Instructions for installing Node.js and Create React App
Download and install Node.js from the [official website](https://nodejs.org/).

1. Open the terminal and run: `npx create-react-app your-app-name`.
2. Navigate into the created directory: `cd your-app-name`.
3. Run the development server: `npm start`.

OR

1. Open the terminal and run: `npm create  vite@latest`.
2. Navigate into the created directory: `cd your-app-name`.
3. Install all the dependancy: `npm install`.
4. Run the development server: `npm start`.



## Creating a simple React component and rendering it to the DOM
- Open `src/App.js`.
- Create a functional component.
- Use the component in `src/App.js`.
- Save and observe the changes in the browser.
