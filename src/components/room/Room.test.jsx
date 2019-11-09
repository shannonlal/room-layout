import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestUtils from 'react-dom/test-utils';
import Room from './Room';


describe('Room Component Test', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');

    const OriginalRoom = Room.DecoratedComponent;
    // ReactDOM.render(<OriginalRoom name="test" items={[]} id={1} moveRoomItem={() => {}} addRoomItem={() => {}} />, div);
    // ReactDOM.unmountComponentAtNode(div);

    let root = TestUtils.renderIntoDocument(
      <OriginalRoom name="test" items={[]} id={1} moveRoomItem={() => {}} addRoomItem={() => {}} />,
    );

    let roomDiv = TestUtils.findRenderedDOMComponentWithTag(root, 'div');

    console.log('Div', roomDiv);
  });
});
