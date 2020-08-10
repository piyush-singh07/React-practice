//Import react and Component classes 
//Both the classes are used to create a react component
import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';


class First extends React.Component{

    constructor()
    {
        super();
    }
    render(){
        return(
            <div>
                <Typography color='primary' variant='h4'> 
                    ReactJs
                </Typography>
                <Typography color='initial' variant='h4'> 
                    ReactJs
                </Typography>
                <Typography color='secondary' variant='h4'> 
                    ReactJs
                </Typography>

                <Typography color='textPrimary' variant='h4'> 
                    ReactJs
                </Typography>
                <Typography color='textSecondary' variant='h4'> 
                    ReactJs
                </Typography>
                <Typography color='error' variant='h4'> 
                    ReactJs
                </Typography>
            </div>
        )
    }

};

export default First;
