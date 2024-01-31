import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { name, location } = props.this;
    return (
      <div className="user-card">
        <h1>User : {name}</h1>
        <h3>Location : {location}</h3>
        <h3>Contact : harshal@34480</h3>
      </div>
    );
  }
}

export default UserClass;
