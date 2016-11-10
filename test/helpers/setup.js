require('babel-register')({ presets: ['es2015', 'react', 'stage-0'] });

require('babel-polyfill');

global.document = require('jsdom').jsdom();

global.window = document.defaultView;
global.navigator = window.navigator;
