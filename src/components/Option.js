import React from 'react';
import  ReactDOM  from 'react-dom';
export const Option =({optionText,handleRemoveOption,count})=>(
        <div className="option">
      <p className="option__message">{count}.{optionText}</p>
      <button className="button button--link"
      onClick={()=>handleRemoveOption(optionText)}>Remove</button>
        </div>
    )
