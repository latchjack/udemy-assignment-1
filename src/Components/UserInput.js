import React, { Component } from 'react';
import './User.css'

const UserInput = (props) => {
  const styles = {
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid black',
    borderRadius: '5px',
    font: 'inherit'
  }
  return (
    <div>
      <h1>User Input</h1>
      <input type="text" onChange={props.change} value={props.name} style={styles} />
    </div>
  );
};

export default UserInput;