import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure } from 'enzyme';
import { wrapInTestContext } from 'react-dnd-test-utils';
import { DragDropContext } from 'react-dnd';
import Adapter from 'enzyme-adapter-react-16';
import TestUtils from 'react-dom/test-utils';
import Room from './Room';


describe('Room Component Test', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });

  it('should render without crashing', () => {
    // const div = document.createElement('div');

    const RoomContext = wrapInTestContext(Room);
    // ReactDOM.render(<OriginalRoom name="test" items={[]} id={1} moveRoomItem={() => {}} addRoomItem={() => {}} />, div);
    // ReactDOM.unmountComponentAtNode(div);\
  
    console.log('Orignial Room', RoomContext);

    // const root = TestUtils.renderIntoDocument(
    const root = mount(<RoomContext name="test" items={[]} id={1} moveRoomItem={() => {}} addRoomItem={() => {}} />);
    //);

    console.log( 'Root of object', root);

    const backend = root.getManager().getBackend();

    const secondDiv = TestUtils.findRenderedDOMComponentWithTag(root, 'div')
  //expect(div.props.style.opacity).toEqual(1)

  console.log( 'Second Div', secondDiv);

    const roomDiv = TestUtils.findRenderedDOMComponentWithTag(root, 'div');

    console.log('Div', roomDiv);
  });
});
