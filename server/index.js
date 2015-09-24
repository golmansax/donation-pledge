import express from 'express';
import path from 'path';
import React from 'react';
import HomePage from './build/home_page';

const env = process.env.NODE_ENV || 'development';
const server = express();

server.use(express.static(path.resolve(__dirname, '..', 'public')));

server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<HomePage/>);
  res.send(html);
});

export default server;
