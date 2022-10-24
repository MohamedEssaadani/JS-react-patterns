import React from "react";

function UsersPresentation({ users }) {
  // get users & decide how to show users

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {users.map((user) => (
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

export default UsersPresentation;
