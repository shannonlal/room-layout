import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RectangularTable from './RectangularTable';

describe('Rectangular Table component', () => {

  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it('starts with a count of 0', () => {
    const wrapper = shallow(<RectangularTable />);

    console.log( 'wrapper', wrapper);
    // Validate the elements of the attribute
    const text = wrapper.find('rect').prop('width');
    console.log( 'text', text);

    // expect(text).toEqual('Count: 0');
  });
});
