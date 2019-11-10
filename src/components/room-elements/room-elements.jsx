import React from 'react';
import RectangularTable from './table/RectangularTable';

export const ROOM_ELEMENTS = { RECT_TABLE: 'rect-table', CIRCLE_TABLE: 'circle-table' };
/**
 * The following function will examine the element that is provided and
 * return a react component based on this.
 * 
 * @param {object} element
 * @param {string} element.type
 */
const createRoomElement = (element) => {
  if (!element || !element.type) throw Error('Unable to create Room Element.  Element or Type not defined');

  switch (element.type) {
    case ROOM_ELEMENTS.RECT_TABLE:
      return <RectangularTable {...element} />;

    default:
  }
};

export default createRoomElement;
