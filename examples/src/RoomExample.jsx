import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {Building} from 'room-layout';

console.log( 'Building', Building);

function RoomExample() {
    console.log( 'Checking Room Example', Building);
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Building />
      </DndProvider>
    </div>
  );
}

export default RoomExample;
