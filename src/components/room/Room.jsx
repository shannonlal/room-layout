import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import RoomItem, { ROOM_ITEM_TYPES } from './RoomItem';

const Room = ({ id, items, styles, width, height, moveRoomItem, addRoomItem }) => {
  const [, drop] = useDrop({
    accept: [ROOM_ITEM_TYPES.ROOM_ITEM, ROOM_ITEM_TYPES.ADD_ROOM_ITEM],
    // eslint-disable-next-line consistent-return
    drop(item, monitor) {
      if (item.type === ROOM_ITEM_TYPES.ADD_ROOM_ITEM) {
        const location = monitor.getClientOffset();
        addRoomItem(id, location.x, location.y);
      } else {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveRoomItem(id, item.id, left, top);
        return undefined;
      }
    },
  });


  // roomId, roomItemId, left, top, styles, element
  return (
    <div ref={drop} style={styles}>
      {items.map((item, index) => {
        const { left, top, title } = item;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <RoomItem roomId={id} roomItemId={index} key={index} left={left} top={top} element="Shannon">
            {item.element}
          </RoomItem>
        )
      })}
    </div>
  );
};

Room.propTypes = {
  id: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(RoomItem).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  styles: PropTypes.objectOf(PropTypes.any),
  moveRoomItem: PropTypes.func.isRequired,
  addRoomItem: PropTypes.func.isRequired,
};

Room.defaultProps = {
  width: 300,
  height: 300,
  styles: {
    border: '1px solid black',
    position: 'relative',
  },
};

export default Room;
