import React, { Component } from 'react';

class Child extends React.Component {

    constructor() {
        super()
        {

        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.key1}</h1>
                <h1>{this.props.key2}</h1>
                <h1>{JSON.stringify(this.props.key3)}</h1>
                <h1> {this.props.key4.map((element,index)=>(
                       <span>{element}</span>
                   ))}</h1>
                <h1>{JSON.stringify(this.props.key5)}</h1>
            </div>
        )
    }

};

export default Child;
