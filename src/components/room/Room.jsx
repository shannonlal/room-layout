import React from 'react';
import PropTypes from 'prop-types';

const Room = ({ name }) => <div> hi {name}</div>;

Room.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Room;
