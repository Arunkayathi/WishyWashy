import React from 'react';
import  ReactDOM  from 'react-dom';
export const Action=({hasOptions,onMakeDecision})=>(
            <div>
            <button className="big-button"
            disabled={!hasOptions} onClick={onMakeDecision}>What Should I do?</button>
            </div>
        );
    

