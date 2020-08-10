import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Server from './Server';
import Alert from '@material-ui/lab/Alert';
import React ,{Component} from 'react';

class Mern extends React.Component{
    render(){
        return(
            <div>
               <FrontEnd />
               <Server /> 
               <BackEnd />  
               <Alert color="info">Collabration of Above Skills called as MERN Stack Development</Alert>
            </div>
        )
    }

};

export default Mern;
