import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RectangularTable from './RectangularTable';

const { expect } = require('chai');

describe('Rectangular Table component', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it('render a default Rectangular Table', () => {
    const wrapper = shallow(<RectangularTable />);
    expect(wrapper.find('rect').prop('width')).equal(50);
  });

  it('render a Rectangular Table with width 100', () => {
    const wrapper = shallow(<RectangularTable width={100} />);
    expect(wrapper.find('rect').prop('width')).equal(100);
  });

  it('render a Rectangular Table with left and top not default', () => {
    const wrapper = shallow(<RectangularTable left={100} top={70} />);
    const rect = wrapper.find('rect');
    expect(rect.prop('y')).equal(70);
    expect(rect.prop('x')).equal(100);
  });
});
