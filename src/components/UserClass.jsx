import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 3,
    };

    console.log("children constructor");
  }

  componentDidMount() {
    console.log("child mount");
  }

  render() {
    console.log("children render");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Count = {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          Count changer
        </button>
        <h1>User : {name}</h1>
        <h3>Location : {location}</h3>
        <h3>Contact : harshal@34480</h3>
      </div>
    );
  }
}

export default UserClass;
