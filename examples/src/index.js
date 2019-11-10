import React from 'react';
import ReactDOM from 'react-dom';

import App from './RoomExample';

const title = 'Room Layout Example 1';

ReactDOM.render(<App title={title} />, document.getElementById('app'));

module.hot.accept();