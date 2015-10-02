import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import HomePage from '../webpack/build/home_page';
import nodemailer from 'nodemailer';
import mailgunTransport from 'nodemailer-mailgun-transport';

const server = express();

server.use(express.static(path.resolve(__dirname, '..', 'webpack', 'build')));
server.use(bodyParser.json());

server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<HomePage/>);
  res.send(html);
});

server.post('/contacts', (req, res) => {
  /*
  const transporter = nodemailer.createTransport(mailgunTransport({
    auth: {
      api_key: 'key-12fb3a2a3e316f7b48110e91082d545f',
      domain: 'golmansax.com'
    }
  }));

  transporter.sendMail({
    from: 'golman622@gmail.com',
    to: 'golman622@gmail.com',
    subject: 'hello',
    text: 'hello world!'
  });
  */
  res.json({});
});

export default server;
