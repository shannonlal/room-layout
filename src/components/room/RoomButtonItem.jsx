import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import { ROOM_ITEM_TYPES } from './RoomItem';

const RoomButtonItem = ({ name, style }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ROOM_ITEM_TYPES.ADD_ROOM_ITEM },
    end: (item, monitor) => {
      monitor.getDropResult();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};

RoomButtonItem.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

RoomButtonItem.defaultProps = {
  style: {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
  },
};
export default RoomButtonItem;
