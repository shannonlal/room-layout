import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

export const ROOM_ITEM_TYPES = { ROOM_ITEM: 'item', ADD_ROOM_ITEM: 'add_item' };

const RoomItem = ({ roomId, roomItemId, left, top, children }) => <div> hi</div> 

RoomItem.propTypes = {
  roomId: PropTypes.number.isRequired,
  roomItemId: PropTypes.number.isRequired,
  left: PropTypes.number,
  top: PropTypes.number,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

RoomItem.defaultProps = {
  left: 0,
  top: 0,
};

export default RoomItem;
