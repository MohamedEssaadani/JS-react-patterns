import React, { useEffect, useState } from "react";
import UsersPresentation from "./UsersPresentation";

/**
 *
 * @description
 ** the Container/Presentational pattern used to separate the logic of a component from the view.
 ** UsersPresentational Component, that cares about *how* data is shown to the user.
 ** UsersContainer Component, that cares about *what* data is shown to the user.
 */
function UsersContainer() {
  // users state
  const [users, setUsers] = useState([]);

  // fetch what data to show
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <>
      <UsersPresentation users={users} />
    </>
  );
}

export default UsersContainer;
