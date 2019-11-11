import React, { useState } from 'react';

export default function Building() {
  const addRoomItem = (roomId, left = 0, top = 0) => {};

  return (
    <div>
      <div>
        <button type="button" onClick={addRoomItem}>
          Add Room
        </button>
      </div>
    </div>
  );
}
