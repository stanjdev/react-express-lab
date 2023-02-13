import React, { useState } from "react";
import { useQuery } from "react-query";
import { Emails } from "./Emails";
import { Names } from "./Names";
import { Users } from "./Users";

export function AllUsers() {
  const [selectedPage, setSelectedPage] = useState('Users');
  const {isLoading, error, data} = useQuery('users', () => {
    return fetch('/users').then((res) => res.json())
  });

  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>Error: {error.message}</h1>

  return(
    <>
      <nav>
        <button className="App-link" id="Users" onClick={(evt) => setSelectedPage(evt.target.id)}>Users</button>
        <button className="App-link" id="Names" onClick={(evt) => setSelectedPage(evt.target.id)}>Names</button>
        <button className="App-link" id="Emails" onClick={(evt) => setSelectedPage(evt.target.id)}>Emails</button>
      </nav>
      {selectedPage === 'Users' ? <Users users={data} /> :
          selectedPage === 'Names' ? <Names names={data.map((user) => `${user.first_name} ${user.last_name}`)} /> :
          selectedPage === 'Emails' ? <Emails emails={data.map((user) => user.email)} /> :
          null
        }
    </>
  )
}

