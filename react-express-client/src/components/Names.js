import React from "react";

export function Names({names}) {
  return(
    <ul>
      <h2>Names</h2>
      {names.map((name) => <li>{name}</li>)}
    </ul>
  )
};

