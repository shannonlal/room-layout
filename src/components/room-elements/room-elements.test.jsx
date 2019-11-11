import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createRoomElement from './room-elements';

describe('Building Component Test', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it('should render without crashing', () => {
    /* const div = document.createElement('div');
    ReactDOM.render(<Building />, div);
    ReactDOM.unmountComponentAtNode(div);
    */
  });
});