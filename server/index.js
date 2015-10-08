import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import nodemailer from 'nodemailer';
import mailgunTransport from 'nodemailer-mailgun-transport';
import webpackAssets from '../webpack/assets';
import HomePage from '../webpack/build/home_page.server_entry';

const server = express();

server.use(express.static(path.resolve(__dirname, '..', 'webpack', 'build')));
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', (req, res) => {
  const page = renderToStaticMarkup(<HomePage assets={webpackAssets} />);
  res.send(`<!DOCTYPE html>${page}`);
});

server.post('/contacts', (req, res, next) => {
  const transporter = nodemailer.createTransport(mailgunTransport({
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  }));

  transporter.sendMail({
    from: `"${req.body.name}" <${req.body.email}>`,
    to: process.env.DEFAULT_EMAIL,
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

server.use((err, req, res, next) => {
  console.error(err.stack); // eslint-disable-line no-console
  next(err);
});

server.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (process.env.NODE_ENV !== 'development') {
    delete err.stack;
  }

  res.status(err.statusCode || 500).json({ error: err.message });
});

export default server;
