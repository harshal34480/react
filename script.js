import React from "react";
import ReactDOM from "react-dom/client";

// JSX => babel transpiles it to react.createElement => reactElement-Js object => HTMLElement(render)

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "element" }, "Hey iam harshal"),
//     React.createElement(
//       "h2",
//       { id: "element" },
//       "i'am learning react from basics to advance"
//     ),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "element" }, "i'am element one"),
//     React.createElement("h2", { id: "element" }, "i'am element two"),
//   ]),
// ]);

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const heading = <h1>Hello My name is Harshal</h1>;
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
