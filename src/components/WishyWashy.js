
import React,{Component} from 'react';
import  ReactDOM  from 'react-dom';
import AddOption from './AddOption';
import { Option } from './Option';
import { Action } from './Action';
import { Header } from './Header';
import { Options } from './Options';
import OptionModal from './OptionModal';
export default class WishyWashy extends Component{
    
    state={
        options:[],
        selectedOption:undefined
    }
    onRemoveOptions=()=>{
        this.setState(()=>({options:[]}))
     };
     onMakeDecision(){
         const index=Math.floor(Math.random()*this.state.options.length);
        this.setState(()=>({
            selectedOption:this.state.options[index]
        }))
     };
     handleOption=(option)=>{
         let capitalizeOption=option.charAt(0).toUpperCase()+option.slice(1).toLowerCase();
         if(capitalizeOption.trim().length===0){
             return "Enter a text"
         }else if(this.state.options.indexOf(capitalizeOption)>-1){
             return "Option already exists"
         }
         this.setState((prevState)=>({options:prevState.options.concat(capitalizeOption)}));
     
     };
     handleClearSelectedOption=()=>{
        this.setState(()=>({
            selectedOption:undefined
        }))
     };
     handleRemoveOption(optionToRemove){
             this.setState((prevState)=>({
                 options:prevState.options.filter((option)=>optionToRemove!==option)
             }));
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
    
      render(){
  
          return (
              <div>
                  <Header/>
                  <div className="container">
                    <Action hasOptions={this.state.options.length>0} onMakeDecision={()=>this.onMakeDecision()}/>
                    <div className="widget">
                        <Options  onRemoveOptions={this.onRemoveOptions} 
                        options={this.state.options}
                        handleRemoveOption={(option)=>this.handleRemoveOption(option)}/>
                        <AddOption handleOption={this.handleOption}/>
                    </div>
                    <OptionModal selectedOption={this.state.selectedOption}
                    handleSelectedOption={this.handleClearSelectedOption}/>
                  </div>
              </div>
          )
      }
  }
WishyWashy.defaultProps={
    options:["1","2"]
}
