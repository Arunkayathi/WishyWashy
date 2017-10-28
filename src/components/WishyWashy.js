
import React,{Component} from 'react';
import  ReactDOM  from 'react-dom';
import AddOption from './AddOption';
import { Option } from './Option';
import { Action } from './Action';
import { Header } from './Header';
import { Options } from './Options';
export default class WishyWashy extends Component{
    
    constructor(props){
        super(props);
        this.state={
            options:props.options
        }
        this.onRemoveOptions=this.onRemoveOptions.bind(this);
        this.handleOption=this.handleOption.bind(this);
    }
    componentDidMount(){
        try{
            const data=localStorage.getItem("options");
            const options=JSON.parse(data);
            if(options){
            this.setState(()=>({options}));
            }
        }catch(e){

        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
            const data=JSON.stringify(this.state.options);
            localStorage.setItem("options",data);
        }

    }
    onRemoveOptions(){
       this.setState(()=>({options:[]}))
    }
    onMakeDecision(){
        const index=Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[index]);
    }
    handleOption(option){
        if(option.trim().length===0){
            return "Enter a text"
        }else if(this.state.options.indexOf(option)>-1){
            return "Option already exists"
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    
    }
    handleRemoveOption(optionToRemove){
            this.setState((prevState)=>({
                options:prevState.options.filter((option)=>optionToRemove!==option)
            }));
    }
    
 
      render(){
  
          return (
              <div>
                  <Header/>
                  <Action hasOptions={this.state.options.length>0} onMakeDecision={()=>this.onMakeDecision()}/>
                  <Options  onRemoveOptions={this.onRemoveOptions} 
                  options={this.state.options}
                  handleRemoveOption={(option)=>this.handleRemoveOption(option)}/>
                  <AddOption handleOption={this.handleOption}/>
              </div>
          )
      }
  }
WishyWashy.defaultProps={
    options:["1","2"]
}
