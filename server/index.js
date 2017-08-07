const express   = require('express');
const config    = require('./config');
const cors      = require('cors');
const app       = express();
const proxyMiddleware = require('./middleware/proxy');

app.use(cors());
app.use('/', proxyMiddleware);

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});
