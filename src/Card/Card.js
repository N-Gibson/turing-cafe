import React from 'react';
import './Card.css';

const Card = (reservation) => {
  const { name, date, time, id, number } = reservation.reservation;

  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card;