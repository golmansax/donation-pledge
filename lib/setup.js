require('babel-core/register');

// Used to support easier requires
const path = require('path');
require('app-module-path').addPath(path.resolve(__dirname));

// Use React global so we don't need to require React for JSX
global.React = require('react');
