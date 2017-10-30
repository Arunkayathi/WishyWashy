import React from 'react';
import  ReactDOM  from 'react-dom';
import { Option } from './Option';
export const Options=({options,onRemoveOptions,handleRemoveOption})=>(
        <div>
            <div className="widget-header">
                    <h3 className="widget-header__title">Your Options</h3>
                    <button className="button button--link"
                    onClick={onRemoveOptions}>Remove All</button>
            </div>
            {options.length===0&& <p className="widget__message">Please add an option to get started</p>}
            {options.map((option,index)=>{
                return <Option key={option} optionText={option}
                handleRemoveOption={handleRemoveOption}/>
            })}
        </div>
    )
