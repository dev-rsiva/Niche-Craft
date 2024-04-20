import React from "react";
import ReactDOM from "react-dom/client";

// const heading = document.createElement("h1");
// heading.innerText = "Hello world from javascript";

// const rootEl = document.getElementById("root");
// rootEl.appendChild(heading);

{
  /* <div id="parent">
  <div id="child1">
    <h1 id="heading1">Hello world</h1>
    <p id="para1">Paragraph</p>
    <p id="para2">Another paragraph</p>
  </div>
  <div id="child2">
    <h1 id="heading2">Hello world</h1>
    <p id="para11">Paragraph</p>
    <p id="para12">Another paragraph</p>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello world"),
    React.createElement("p", { id: "para1" }, "Paragraph"),
    React.createElement("p", { id: "para2" }, "Another Paragraph"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading2" }, "Hello world"),
    React.createElement("p", { id: "para11" }, "Paragraph"),
    React.createElement("p", { id: "para12" }, "Another Paragraph"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
