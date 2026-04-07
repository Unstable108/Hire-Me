import React from "react";
import ReactDOM from "react-dom/client";

//creating element using core react
const heading = React.createElement("h2",{id:"heading"},"Hi here");

//here heading is a react element -> object
// console.log(heading) --> an object

//JSX ->  html-like language
const jsxHeading = <h2>Hi There</h2>

// console.log(jsxHeading) --> also object

const root = ReactDOM.createRoot(document.getElementById("root"));

//when render in root, it become html
root.render(heading);
