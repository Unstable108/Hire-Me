const heading = document.createElement('h2');
heading.innerHTML="This is from inner-html"
const root = document.getElementById("root");
root.appendChild(heading);

with react -> react is a library
(it can work in a small portion of any project)
(not a framework)
-> it gives some helper methods to devlop our project

const heading = React.createElement("h2", {we pass attibute here}, "This is from react");

// react need to create root , via ReactDom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

if we want to pass more children we use array []

const heading = React.createElement("div", {we pass attibute here}, [("h2",{},"h2 content"),("h1",{},"h1 content)]);

whenever we use react on root, and if already something written inside root in html file
it will replace with our root code
