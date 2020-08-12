import React, { Component } from 'react';
import Child from './Child';

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            'sub': 'ReactJs',
            'version': 19,
            'demand': true,
            'subs': ["ReactJS", "Angular", "VueJS", "NodeJS", "React Native"],
            'obj': { "database": "in memory database" }
        }
    }
    render() {
        return (
            <div>
                <Child key1={this.state.sub}
                    key2={this.state.version}
                    key3={this.state.demand}
                    key4={this.state.subs}
                    key5={this.state.obj}></Child>
            </div>
        )
    }

};

export default Parent;
