import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Form', () => {
  let wrapper, res;
  beforeEach(() => {
    reservation = {
      reservation: {
        date: "12/29",
        id: "1",
        name: "Christie",
        number: "12",
        time: "7:00",
      }
    }
    wrapper = shallow(<Card reservation={res}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})