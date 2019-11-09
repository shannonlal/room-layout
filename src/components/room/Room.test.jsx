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
    ReactDOM.render(<Room name="test" items={[]} id={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
