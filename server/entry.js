require('babel/register');

const config = require('./config');
if (config.NODE_ENV === 'development') { require('dotenv').load(); }

require('./').listen(config.PORT);
