
import React, { useState }  from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';


function Getstories(props) {
    const [modalIsOpen, setModalIsOpen ] = useState(false);
     
    function showStoryHandler() { 
            
        setModalIsOpen(true);
    }

    // function closeStoryHandler() {
    //     setStoryIsOpen(false);
    // }
    return(
        <div className='card'>
            <h2> {props.text} </h2>
            <div className='actions'>
                <button className='btn' onClick={showStoryHandler}> 
                    Details
                </button>
            </div>
            
            {modalIsOpen && <Modal />}
            {modalIsOpen && <Backdrop  />}
            

        </div>    
    );
}

export default Getstories;  

