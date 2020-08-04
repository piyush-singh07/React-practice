import React, { Component } from "react";
import './First.css';

class First extends React.Component {

    constructor() {
        super();
        this.state = {
            "data": "data from database soon....!",
            "products": [{ "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
            { "p_id": 222, "p_name": "p_two", "p_cost": 20000 },
            { "p_id": 333, "p_name": "p_three", "p_cost": 30000 },
            { "p_id": 444, "p_name": "p_four", "p_cost": 40000 },
            { "p_id": 555, "p_name": "p_five", "p_cost": 50000 }],
            "version": 16.1,
            "obj": { "sub": "ReactJS" }
        };
    };
    // we can not display an object directly in react so we need to first convert in string and then display
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <table border="1"
                    cellPadding="10px"
                    cellSpacing="10px"
                    align="center">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(
                            (element,index)=>(<tr>
                                <td>{index+1}</td>
                                <td>{element.p_id}</td>
                                <td>{element.p_name}</td>
                                <td>{element.p_cost}</td>
                            </tr>
                            )
                        )}
                        </tbody>
                </table>
                <h1 style={{color:"blue"}}>{this.state.version}</h1>
               <h1 className="class_one">{JSON.stringify(this.state.obj)}</h1> 
            </div>

        )
    }


};

export default First;