import React, { Component } from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => this.setState({reservations: data}))
    .catch(err => console.error(err))
  }

  makeReservation = (newRes) => {
    const formattedRes = {
      name: newRes.name,
      date: newRes.date,
      time: newRes.time,
      number: parseInt(newRes.number)
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(formattedRes),
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => res.json())
    .then(data => this.setState({reservations : [...this.state.reservations, data]}))
    .catch(err => console.error(err))

    // this.setState({reservations : [...this.state.reservations, newRes]})
  }

  deleteReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => this.setState({reservations : data}))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form makeReservation={this.makeReservation}/>
        </div>
        <div className='resy-container'>
          {this.state.reservations.map(res => {
            return <Card reservation={res} deleteReservation={this.deleteReservation} key={res.id}/>
          })}
        </div>
      </div>
    )
  }
}

export default App;
