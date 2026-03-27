{
  /* 
<div id="parent">
    <div id="child">
        <h2 id="heading">Miixing up lots of thhings</h2>
    </div>
</div> 
*/
}

const content = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("div", { id: "heading" },"H2 tag inside two divs"),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
