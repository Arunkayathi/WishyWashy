import React from 'react';
import Modal from 'react-modal';

const OptionModal=({selectedOption,handleSelectedOption})=>(
<Modal
isOpen={!!selectedOption}
onRequestClose={handleSelectedOption}
contentLabel="Selected option"
closeTimeoutMS={200}
className="modal"
>
 <h1 className="modal__title">Selected Option</h1>
 {selectedOption && <p className="modal__body">{selectedOption}</p>}
 <button className="button" onClick={handleSelectedOption}>Okay</button>
</Modal>


);

export default OptionModal;