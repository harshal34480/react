/*
<div id="parent">
<div id="child">
<h1 id="element1"></h1>
<h1 id="element2"></h1>
</div>
</div>
*/

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "element" }, "i'am element one"),
    React.createElement("h2", { id: "element" }, "i'am element two"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "element" }, "i'am element one"),
    React.createElement("h2", { id: "element" }, "i'am element two"),
  ]),
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
