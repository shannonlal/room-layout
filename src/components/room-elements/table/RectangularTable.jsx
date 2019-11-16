import React from 'react';
import PropTypes from 'prop-types';

const RectangularTable = ({ left, top, width, height, styles }) => (
  <div>
    <rect styles={styles} width={width} height={height} x={left} y={top} />
  </div>
);

export const RectangularTableButtonStyle = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

RectangularTable.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  styles: PropTypes.objectOf(PropTypes.any),
};

RectangularTable.defaultProps = {
  left: 0,
  top: 0,
  width: 50,
  height: 50,
  styles: {
    border: '1px solid black',
    position: 'relative',
  },
};

export default RectangularTable;
