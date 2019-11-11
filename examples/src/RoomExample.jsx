import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {Building} from 'room-layout';

// TODO Move Button Controls into separate component
function RoomExample() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Building />
      </DndProvider>
    </div>
  );
}

export default RoomExample;
