import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper, makeRes;
  beforeEach(() => {
    makeRes = jest.fn()
    wrapper = shallow(<Form makeReservation={makeRes}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should be able to handle a change in state', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Bob'
      }
    }
    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('name')).toEqual('Bob')
  });

  it('should make a reservation on click', () => {
    wrapper.find('button').simulate('click')

    expect(makeRes.mock.calls.length).toEqual(1)
    // expect(makeRes).toHaveBeenCalled()
  })
})