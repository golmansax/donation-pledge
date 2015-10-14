/* eslint-disable no-process-env */

export const NODE_ENV = process.env.NODE_ENV || 'development';
if (NODE_ENV === 'development') { require('dotenv').load(); }

export const PORT = process.env.PORT || 3000;
export const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
export const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
export const DEFAULT_EMAIL = process.env.DEFAULT_EMAIL;
