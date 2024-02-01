import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        {/* <h1>About</h1>
        <h2>Created by Harshal</h2>
        <p>food delivery app</p> */}

        <UserClass name={"Name"} location={"Remote"} />
        {/* <UserClass
          name={"Harshal Wankhade (class component)"}
          location={"Nagpur"}
        /> */}
      </div>
    );
  }
}

export default About;
