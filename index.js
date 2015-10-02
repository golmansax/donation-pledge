const env = process.env.NODE_ENV || 'development';
if (env === 'development') { require('dotenv').load(); }

require('babel/register');
require('./server').listen(process.env.PORT || 3000);
