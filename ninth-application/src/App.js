import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      arr: []
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((posRes) => {
        this.setState({ arr: posRes.data });
      }, (errRes) => {
        console.log('Error Occured');
      })
  };



  render() {
    return (
      <Container fluid className='mt-5'>
        <Table bordered
          hover
          striped
          size="sm"
          variant="dark">
          <thead>
            <tr>
              <th>SNO</th>
              <th>NAME</th>
              <th>CAPITAL</th>
              <th>POPULATION</th>
              <th>NATIVE NAME</th>
              <th>REGION</th>
              <th>FLAG</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arr.map((element, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                              <td>{element.name}</td>
                              <td>{element.capital}</td>
                              <td>{element.population}</td>
                              <td>{element.nativeName}</td>
                              <td>{element.region}</td>
                              <td><img width="100px" height="50px" src={element.flag}></img></td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>
    )
  }
};

export default App;