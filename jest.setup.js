import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

const g = global as any;

configure({ adapter: new Adapter() });

g.HTMLCanvasElement.prototype.getContext = _ => _;
g.URL.createObjectURL = _ => _;

// polyfills
if (typeof g.Promise === 'undefined') {
    // Rejection tracking prevents a common issue where React gets into an
    // inconsistent state due to an error, but it gets swallowed by a Promise,
    // and the user has no idea what causes React's erratic future behavior.
    require('promise/lib/rejection-tracking').enable();
    g.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

require('babel-polyfill');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
g.Object.assign = require('object-assign');
