import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Room from './Room';

describe('Room Component Test', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Room name="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should fail to render the query component because missing query function', () => {
    const queryComponent = mount(<Room name="test" />);

    console.log( 'Query Component', queryComponent);
    expect(queryComponent.find('p').length).toBe(1);
    expect(queryComponent.text()).toBe('Unexpected error creating Query field.  Missing property');
  });
});
