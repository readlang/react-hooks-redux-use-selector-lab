import React from "react";
import {useSelector} from "react-redux";
// add any needed imports here



function Users() {

  const state = useSelector(state => state.users)
  console.log(state)

  return (
    <div>
      <ul>
        Users:
        {useSelector(state => state.users).map(x=><div key={x.username}>{x.username}</div>)}
        <div>Number of users: {useSelector(state => state.users).length} </div>
      </ul>
    </div>
  );
}

export default Users;
