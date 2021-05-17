import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Title from '.'

configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<Title />);
  });

  it("renders title", () => {
    const wrapper = shallow(<Title content="hello this is my content" />);
    expect(wrapper.find('.title__main_container')).toBeDefined();
  });