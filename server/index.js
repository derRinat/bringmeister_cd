const http = require('http');
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

const config = require('./config');
const { target, changeOrigin } = config;

app.use('/api', proxy({target, changeOrigin}));

const port = process.env.PORT || config.port;

http.createServer(app).listen(port, () => {
    console.log('Server listening on:', port);
});
