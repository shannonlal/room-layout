import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Building } from 'room-layout';

// TODO Move Button Controls into separate component
function RoomExample() {
  const buttons = [{ name: 'Add Table' }];
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Building buttons={buttons} />
      </DndProvider>
    </div>
  );
}

export default RoomExample;
