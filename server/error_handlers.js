import { isDevelopment } from './config';

export const logError = (err, req, res, next) => {
  console.error(err.stack); // eslint-disable-line no-console
  next(err);
};

export const sendErrorToClient = (err, req, res, next) => {
  if (res.headersSent) { return next(err); }

  if (isDevelopment()) { Reflect.deleteProperty(err, 'stack'); }
  res.status(err.statusCode || 500).json({ error: err.message });
};
