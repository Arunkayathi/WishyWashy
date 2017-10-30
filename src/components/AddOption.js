import React,{Component} from 'react';
import  ReactDOM  from 'react-dom';

export default class AddOption extends Component{
    state={
        error:undefined
    }
   
    addOption=(e)=>{
        e.preventDefault();                                                      
        const option=e.target.elements.option.value;
        console.log(option);
        const error=this.props.handleOption(option)
            this.setState(()=>({error}))           
            if(!error){
                e.target.elements.option.value='';
            }
        
    };
    render(){ 
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.addOption}>
            
            <input type="text" name="option"/>
                <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}