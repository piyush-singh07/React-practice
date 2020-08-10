import React,{ Component } from "react";
import Typograpgy from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

class Service extends React.Component{

    constructor()
    {
        super();
        this.state={
            'sub':'React'
        };
    };

    myFun=()=>{
        this.setState({'sub':'ReactJS'});
    };

    myFun1=(arg0,arg1)=>{
        if(arg0==='admin'&& arg1==='admin')
        {
            this.setState({'sub':'React Native'});
        }else
        {
            this.setState({'sub':'Error'});
        }
    };

    render(){
        

        return( <div>
            <Typograpgy color="error" variant="h4"> {this.state.sub} </Typograpgy>
            <Button variant="outlined" onClick={()=>{this.myFun()}} color="primary" size="small">Change</Button>
            <Button variant="outlined" size="small" color="secondary" onClick={ ()=>{ this.myFun1("admin","admin") } }>Change1</Button>
        </div>)
    }

};

export default Service;
