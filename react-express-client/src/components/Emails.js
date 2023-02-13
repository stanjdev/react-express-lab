import React from "react";

export function Emails({emails}) {
  return (
    <>
      <ul>
        <h2>Email List</h2>
        {emails.map((email) => <li>{email}</li>)}
      </ul>
    </>
  )
};
