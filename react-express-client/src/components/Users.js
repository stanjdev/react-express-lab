import React from "react";

export function Users({users}) {
  return(
    <ul>
      <h2>All Users</h2>
      {users.map((user) => {
        return (
          <div className="userCard">
            <small>{`${user.first_name} ${user.last_name}`}</small>
            <small>{user.email}</small>
            <small>{user.gender}</small>
          </div>
        )
      })}
    </ul>
  )
};


