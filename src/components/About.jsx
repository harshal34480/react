import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Created by Harshal</h2>
      <p>food delivery app</p>
      <User
        name={"Harsahl Wankhade(Functional Component)"}
        location={"Amravati"}
      />
      <UserClass
        name={"Harshal Wankhade (class component)"}
        location={"Nagpur"}
      />
    </div>
  );
};

export default About;
