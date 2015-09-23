import express from 'express';
import React from 'react';
import HomePage from '../client/home_page';

const env = process.env.NODE_ENV || 'development';
const server = express();

if (env === 'development') {
  const httpProxy = require('http-proxy');
  const proxy = httpProxy.createProxyServer();

  server.all('/build/*', (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:8080' });
  });
}

server.use(express.static(__dirname + '/public'));
server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<HomePage/>);
  res.send(html);
});

export default server;
