import FrontEnd from './FrontEnd';
import Server from './Server';
import BackEnd from './BackEnd';
import React,{Component} from "react";

class FullStack extends React.Component
{
    render(){
        return (
            <div>
            <FrontEnd></FrontEnd>
            <Server></Server>
            <BackEnd></BackEnd>
            </div>


        )
    }

};

export default FullStack;

