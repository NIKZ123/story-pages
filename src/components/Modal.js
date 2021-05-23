import React from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';


function Modal() {
    return (
      <div className='modal'>
        
        <h1>Welcome to the Story!</h1>
        <h3>Here is a short description about your story. Let's start playing!</h3>
        <button className='btn btn--alt'>Cancel</button>
        <button className='btn'> Start Game</button>
      </div>
    );
  }

  
  export default Modal;


  