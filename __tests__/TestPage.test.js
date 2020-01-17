import React from 'react'
import TetsPage from '../pages/TestPage'
import { shallow, mount } from 'enzyme'

describe("Test component", () => {
   test("it's renders", () => {
   const wrapper = shallow(<TetsPage />);
   expect(wrapper.exists()).toBe(true);
 
   });
});