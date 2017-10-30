import React from 'react';
import  ReactDOM  from 'react-dom';
export const Option =({optionText,handleRemoveOption})=>(
        <div>
      {optionText}
      <button className="button button--link"
      onClick={()=>handleRemoveOption(optionText)}>Remove</button>
        </div>
    )
