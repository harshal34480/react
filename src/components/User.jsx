const User = (porps) => {
  const { name, location } = porps;
  return (
    <div className="user-card">
      <h1>User : {name}</h1>
      <h3>Location : {location}</h3>
      <h3>Contact : harshal@34480</h3>
    </div>
  );
};

export default User;
