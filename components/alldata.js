function AllData() {
  const ctx = React.useContext(UserContext);
  const usersArray = ctx.users;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {usersArray.map((ele) => (
        <Card
          bgcolor="secondary"
          header="All Data"
          body={
            <>
              Name: {ele.name}
              <br></br>
              Email: {ele.email}
              <br></br>
              Password: {ele.password}
              <br></br>
              Balance: {ele.balance}
              <br></br>
            </>
          }
        ></Card>
      ))}
    </div>
  );
}
