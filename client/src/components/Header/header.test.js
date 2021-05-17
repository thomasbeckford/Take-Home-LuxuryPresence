import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import {Link} from 'react-router-dom'
import Header from '.'

configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<Header />);
  });
  
  it("renders header", () => {
    const wrapper = shallow(<Header />);
    const link = <Link to="/">Home</Link>;
    expect(wrapper.contains(link)).toEqual(true);
  });