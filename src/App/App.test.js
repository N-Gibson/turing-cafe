import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  // it('should be able to set fetch to state', () => {
  //   const mockResponse = [
  //     {
  //       date: "12/29",
  //       id: "1",
  //       name: "Christie",
  //       number: "12",
  //       time: "7:00",
  //     }
  //   ]

  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.resolve({
  //       ok: true,
  //       json: () => Promise.resolve(mockResponse)
  //     })
  //   })

  //   expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  // });

  it('should be able to make a reservation', () => {
    const mockRes =
          {
            date: "12/29",
            id: "1",
            name: "Christie",
            number: "12",
            time: "7:00",
          }

    wrapper.instance().makeReservation(mockRes)

   expect(wrapper.state('reservations')).toEqual([mockRes])
  })
});
