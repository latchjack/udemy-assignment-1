import React from 'react';
import { render } from 'react-dom';

const UserOutput = (props) => {
  return (
    <div>
      <p>Para</p>
      <p>Graph</p>
      <p onClick={props.click}>Username: {props.username}</p>
    </div>
  )
}

export default UserOutput;