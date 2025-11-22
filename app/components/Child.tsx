import React from 'react'

interface props{
    user:string
}


export const Child = ({user}:props) => {
  return (
    <>
          <div>Parent</div>
          <div>{user}</div>
    </>
  );
}
