import express from 'express';
import path from 'path';
import React from 'react';
import HomePage from './build/home_page';

const server = express();

server.use(express.static(path.resolve(__dirname, 'build')));

server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<HomePage/>);
  res.send(html);
});

export default server;
