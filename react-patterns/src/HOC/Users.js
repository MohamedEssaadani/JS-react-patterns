import React from "react";
import withLoader from "./WithLoader";

function Users({ data }) {
  // get users & decide how to show users

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {data.map((user) => (
        <p
          style={{
            backgroundColor: "grey",
            color: "white",
            fontSize: "18px",
            width: "70%",
            textAlign: "center",
          }}
        >
          {user.name}
        </p>
      ))}
    </div>
  );
}

export default withLoader(Users, "https://jsonplaceholder.typicode.com/users");
