import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import SearchBar from '.'

configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<SearchBar />);
  });
