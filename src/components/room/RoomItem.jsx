import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

// TODO.  Refactor this to a higher order component.  withRommItem
const RoomItem = ({ roomId, roomItemId, left, top, styles, element, type }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { roomId, roomItemId, left, top, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div ref={drag} style={{ ...styles, left, top }}>
      `Room ${roomId} Item ${roomItemId}`
    </div>
  );
};

RoomItem.propTypes = {
  roomId: PropTypes.number.isRequired,
  roomItemId: PropTypes.number.isRequired,
  left: PropTypes.number,
  top: PropTypes.number,
  element: PropTypes.objectOf(PropTypes.any).isRequired,
  styles: PropTypes.objectOf(PropTypes.any),
};

RoomItem.defaultProps = {
  left: 0,
  top: 0,
  styles: {
    border: '1px solid black',
    position: 'relative',
  },
};

export default RoomItem;
