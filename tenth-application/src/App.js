import React, {Component} from 'react';
import axios from 'axios';


class App extends React.Component {

  constructor()
  {
    super();
    this.state ={
      msg:{}
    };
  };


 myFunction=()=>{
  axios.post("http://test-routes.herokuapp.com/test/uppercase",{"message":this.refs.msg.value})
  .then((posRes)=>{
    console.log(posRes)
   this.setState({
        msg : posRes.data
     })
  },(errRes)=>{
   console.log(errRes);
});

 };

  render(){
    return(
      <div>
       <input type='text' ref='msg' placeholder='Enter a message'></input>
        <br></br><br></br>
        <button onClick={this.myFunction}>Send</button>
    <h1>{this.state.msg.message}</h1>
      </div>

    )
  };


  

};

export default App;
