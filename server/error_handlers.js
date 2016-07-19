import { isDevelopment } from './config';

export const logError = (err, req, res, next) => {
  console.error(err.stack); // eslint-disable-line no-console
  next(err);
};

export const handle500 = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }
  if (isDevelopment()) { Reflect.deleteProperty(err, 'stack'); }
  res.status(err.statusCode || 500).json({ error: err.message });
};

export const handle404 = (req, res) => {
  res.status(404).send('Sorry, we cannot find the page you are looking for.');
};
