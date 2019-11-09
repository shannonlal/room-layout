import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RoomItem from './RoomItem';

describe('Room Item Component Test', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RoomItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
