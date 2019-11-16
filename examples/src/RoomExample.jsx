import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Building, ROOM_ITEM_TYPES, RectangularTableButtonStyle, CircleTableButtonStyle } from 'room-layout';

// TODO Move Button Controls into separate component
function RoomExample() {
  const buttons = [
    { name: 'Add Table', type: ROOM_ITEM_TYPES.RECT_TABLE_ADD, style: RectangularTableButtonStyle },
    { name: 'Add Circle', type: ROOM_ITEM_TYPES.CIRCLE_TABLE_ADD, style: CircleTableButtonStyle },
  ];
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Building buttons={buttons} />
      </DndProvider>
    </div>
  );
}

export default RoomExample;
