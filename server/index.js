import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import nodemailer from 'nodemailer';
import mailgunTransport from 'nodemailer-mailgun-transport';
import { DEFAULT_EMAIL, MAILGUN_API_KEY, MAILGUN_DOMAIN } from './config';
import {
  HomeRouteHandler,
  UserRouteHandler,
  LoginRouteHandler,
} from './route_handlers';
import { logError, sendErrorToClient } from './error_handlers';

const server = express();

server.use(express.static(path.resolve(__dirname, '..', 'webpack', 'build')));
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', HomeRouteHandler);
server.get('/pledgers/golmansax', UserRouteHandler);
server.get('/log-in', LoginRouteHandler);

server.post('/contacts', (req, res, next) => {
  const transporter = nodemailer.createTransport(mailgunTransport({
    auth: {
      api_key: MAILGUN_API_KEY,
      domain: MAILGUN_DOMAIN,
    },
  }));

  transporter.sendMail({
    from: `"${req.body.name}" <${req.body.email}>`,
    to: DEFAULT_EMAIL,
    subject: 'Contact from My Impact Pledge',
    text: req.body.comment,
  }, (err) => {
    if (err) {
      next(err);
    } else {
      res.json({});
    }
  });
});

server.use(logError);
server.use(sendErrorToClient);

export default server;
