import React, { Component } from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      newReservation: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => this.setState({reservations: data}))
    .catch(err => console.error(err))
  }

  makeReservation = (newRes) => {
    // this.setState({newReservation: newRes})
    this.setState({reservations : [...this.state.reservations, newRes]})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form makeReservation={this.makeReservation}/>
        </div>
        <div className='resy-container'>
          {this.state.reservations.map(res => {
            return <Card reservation={res} />
          })}
        </div>
      </div>
    )
  }
}

export default App;
