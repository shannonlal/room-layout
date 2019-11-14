import React from 'react';
import PropTypes from 'prop-types';
import RoomButtonItem from './RoomButtonItem';

const BuildingControl = ({ zoomEnabled, zoomIn, zoomOut, resetTransform, style, buttons }) => {
  const getZoomControl = () => {
    if (zoomEnabled) {
      return (
        <div>
          <button type="button" onClick={zoomIn}>
            +
          </button>
          <button type="button" onClick={zoomOut}>
            -
          </button>
          <button type="button" onClick={resetTransform}>
            x
          </button>
        </div>
      );
    }
  };

  const getButtonControls = () => {
    if (buttons && buttons.length > 0) {
      return (
        <div>
          {buttons.map((button) => {
            return <RoomButtonItem name={button.name} />;
          })}
        </div>
      );
    }
  };

  return (
    <div style={{ ...style }}>
      {getZoomControl(zoomEnabled)}
      {getButtonControls(buttons)}
    </div>
  );
};

BuildingControl.propTypes = {
  zoomEnabled: PropTypes.bool,
  zoomIn: PropTypes.func,
  zoomOut: PropTypes.func,
  resetTransform: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

BuildingControl.defaultProps = {
  zoomEnabled: true,
  zoomIn: () => {},
  zoomOut: () => {},
  resetTransform: () => {},
  buttons: [],
  style: {
    border: '1px dashed gray',
  },
};
export default BuildingControl;
