import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  makeRes = () => {
    if(this.state.name !== '' && this.state.date !== '' && this.state.time !== '' && this.state.number !== '') {
      this.props.makeReservation(this.state)
      this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', number: ''})
  }

  render() {
    return (
      <div className='form'>
        <input 
          type='text' 
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <input 
          type='text' 
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
        ></input>
        <input 
          type='text' 
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={this.handleChange}
        ></input>
        <input 
          type='text' 
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={this.handleChange}
        ></input>
        <button type='button' onClick={this.makeRes}>Make Reservation</button>
      </div>
    )
  }
}
export default Form;