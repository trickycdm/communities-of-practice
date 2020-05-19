import React from 'react';
import { Button } from './Button';
import { render, shallow } from 'enzyme';

const mockClickFunc = jest.fn();

describe('Button', () => {
  // simple render without any interactivity
  it('should render correctly with default props', () => {
    const component = render(<Button />);
    expect(component).toMatchSnapshot();
  });
  // mount the full component to check interactivity
  it('should render correctly with custom props', () => {
    const component = shallow(<Button id="test" label="Custom label" onClick={mockClickFunc} type="button" />);
    component.find('button#test').simulate('click');

    expect(component).toMatchSnapshot();
    expect(mockClickFunc).toHaveBeenCalled();
  });
});
