import React from 'react';
import PropTypes from 'prop-types';

const CircleTable = ({ cx, cy, radius, fill, styles }) => (
  <div>
    <circle styles={styles} cx={cx} cy={cy} r={radius} file={fill}/>
  </div>
);

export const CircleTableButtonStyle = {
  height: '3rem',
  width: '3rem',
  backgroundColor: '#05ffb0',
  borderRadius: '50%',
  display: 'inline-block',
};

CircleTable.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  radius: PropTypes.number,
  fill: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.any),
};

CircleTable.defaultProps = {
  cx: 10,
  cy: 10,
  radius: 50,
  fill: 'black',
  styles: {
    border: '1px solid black',
    position: 'relative',
  },
};

export default CircleTable;
