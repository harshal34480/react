import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { name: "benam", location: "remote", public_repos: 0 },
    };

    console.log("children constructor");
  }

  async componentDidMount() {
    console.log("child mount");
    // api call
    const data = await fetch("https://api.github.com/users/harshal34480");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("children render");
    const { name, location, public_repos } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>User : {name}</h1>
        <h3>Location : {location}</h3>
        <h3>Contact : harshal@34480</h3>
        <h4>Repo : {public_repos}</h4>
      </div>
    );
  }
}

export default UserClass;
