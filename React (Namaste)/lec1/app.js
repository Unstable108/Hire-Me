const heading = React.createElement("h2", {}, "This is from react");

// react need to create root , via ReactDom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
