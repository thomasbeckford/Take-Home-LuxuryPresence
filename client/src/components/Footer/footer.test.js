import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Footer from '.'

configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<Footer />);
  });
  
  it("renders footer", () => {
    const wrapper = shallow(<Footer />);
    const createdBy = <p>Created by Thomas</p>;
    expect(wrapper.contains(createdBy)).toEqual(true);
  });