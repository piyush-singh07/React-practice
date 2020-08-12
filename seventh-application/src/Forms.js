import React, { Component } from 'react';

class Forms extends React.Component {
    login = () => {
        if (this.refs.uname.value === 'admin' && this.refs.upwd.value === 'admin') {
            alert('Login Successful')
        }
        else {
            alert('Login Failed')
        }
    };


    render() {
        return (
            <div>
                <input type='text'
                       ref='uname' placeholder='Enter username'></input>
                <input type='password' ref='upwd' placeholder='Enter passcode'></input>
                <button onClick={this.login}>Login</button>
            </div>
        )
    };
};

export default Forms;