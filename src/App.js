import React  from 'react';
import Getstories from './components/Getstories';


function App() {
  
  return (
    <div>
      <h1 className='title'>Select a Story!</h1>
      <Getstories text='Story 1'/> <br/>
      <Getstories text='Story 2'/> <br/>
      <Getstories text='Story 3'/>
      
      
    </div>
  );
  
}

export default App;
