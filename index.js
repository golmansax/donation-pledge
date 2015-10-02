process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') { require('dotenv').load(); }

require('babel/register');
require('./server').listen(process.env.PORT || 3000);
