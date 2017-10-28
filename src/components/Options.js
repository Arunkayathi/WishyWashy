import React from 'react';
import  ReactDOM  from 'react-dom';
import { Option } from './Option';
export const Options=({options,onRemoveOptions,handleRemoveOption})=>{
    return(
        <div>
        <button onClick={onRemoveOptions}>Remove All</button>
        {options.length===0&& <p>Please add an option to get started</p>}
        {options.map((option,index)=>{
            return <Option key={option} optionText={option}
            handleRemoveOption={handleRemoveOption}/>
        })}
        </div>
    )

}