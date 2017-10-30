import React from 'react';
import Modal from 'react-modal';

const OptionModal=({selectedOption,handleSelectedOption})=>(
<Modal
isOpen={!!selectedOption}
onRequestClose={handleSelectedOption}
contentLabel="Selected optio"
>
 <h1>Selected Option</h1>
 {selectedOption && <p>{selectedOption}</p>}
 <button onClick={handleSelectedOption}>Okay</button>
</Modal>


);

export default OptionModal;