import React from 'react';
import ReactDOM from 'react-dom';

import RoomExample from './RoomExample';

const rootElement = document.getElementById('app');
ReactDOM.render(<RoomExample />, rootElement);

module.hot.accept();
