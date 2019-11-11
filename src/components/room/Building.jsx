import React, { useState } from 'react';
// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import update from 'immutability-helper';

import Room from './Room';

const Building = () => {
  const [roomDetails, setRoomDetails] = useState({
    rooms: [
      {
        name: 'Room 1',
        elements: [],
      },
      {
        name: 'Room 2',
        elements: [],
      },
    ],
  });

  const moveRoomItem = (roomId, id, left, top) => {
    setRoomDetails(
      update(roomDetails, {
        rooms: {
          [roomId]: {
            elements: {
              [id]: {
                $merge: { left, top },
              },
            },
          },
        },
      })
    );
  };

  const addRoomItem = (roomId = 0, left = 0, top = 0) => {
    console.log(`Adding ${roomId} left ${left} top ${top}`);
    setRoomDetails(
      update(roomDetails, {
        rooms: {
          [roomId]: {
            elements: {
              $push: [{ left, top, title: 'New Room' }],
            },
          },
        },
      })
    );
  };
  const removeRoomItem = (roomId, itemId) => {
    setRoomDetails(
      update(roomDetails, {
        rooms: {
          [roomId]: {
            elements: {
              $splice: [[itemId, 1]],
            },
          },
        },
      })
    );
  };

  const onAddRoomItem = () => {
    addRoomItem();
  };

  return (
    <div>
      {roomDetails.rooms.map((room, index) => {
        return (
          <Room
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            id={index}
            height={300}
            width={300}
            items={room.elements}
            moveRoomItem={moveRoomItem}
            addRoomItem={addRoomItem}
            removeRoomItem={removeRoomItem}
          />
        );
      })}
      <div>
        <button type="button" onClick={onAddRoomItem}>
          Add Room
        </button>
      </div>
    </div>
  );
};

export default Building;
