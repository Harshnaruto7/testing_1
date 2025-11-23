import React from 'react'

interface props{
  user: string
  role : string
}


export const Child = ({user,role}:props) => {
  return (
    <>
          <div>Parent</div>
      <div>{user}</div>
      <br />
      <br />
      {role}
    </>
  );
}
