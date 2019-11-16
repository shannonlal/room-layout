import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

const RoomButtonItem = ({ name, style, type }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type },
    end: (item, monitor) => {
        console.log( 'End Drag of item ', type);
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
  style: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
};

export default RoomButtonItem;
