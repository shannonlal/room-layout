import React, { useState } from 'react';
// import update from 'immutability-helper';

const Building = () => {
  console.log('Inside Building');
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

  /* const moveRoomItem = (roomId, id, left, top) => {
    console.log(`Moving Room ${roomId} Element ${id} Left ${left} top ${top}`);
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

  const addRoomItem = (roomId, left = 0, top = 0) => {
    console.log(`Adding Item to Room ${roomId} Left ${left} Top ${top}`);
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
    console.log(`Remove rooom called room ${roomId} id ${itemId}`);

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
  */
  console.log('Calling Building');
  return (
    <div>
      <div>
        <button type="button">Add Room</button>
      </div>
    </div>
  );
};

export default Building;
