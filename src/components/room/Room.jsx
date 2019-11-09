import React from 'react';
import PropTypes from 'prop-types';
import RoomItem from './RoomItem';

const Room = ({ name, id, items, styles, width, height }) => (
  <div sytle={{ ...styles, width, height }}>
    {' '}
    hi {name} id {id} items {items.length}{' '}
  </div>
);

Room.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(RoomItem).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  styles: PropTypes.objectOf(PropTypes.any),
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
