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

// react element
//const heading = <h1 className="heading">Hello My name is Harshal</h1>;

// react component => return react element
// react functional component is a javascript function which return jsx
// functional component

const num = 100;

const titel = <h1>{num} I am component inside component</h1>;

// we use curly bracket to inject js into ous jsx
// the Curly bracket sanatized the given js we pass into it
// we can also js inside curly bracket
const HeadingComponent = () => (
  <div>
    {titel}
    <h1> This is react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// to render the react component we have to put component inside angular tag
// then bable understand it is react component and then it convert into html and view on browser
root.render(<HeadingComponent />);
