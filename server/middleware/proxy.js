const got  = require('got');
const config = require('../config');
const status = require('../constants/statuses');

const ProxyMiddleware = (req, res, next) => {

       const url = `${config.proxy}${req.originalUrl}`;
       const options = {
           headers: {
               'Content-Type': 'application/json'
           }
       };
       const toreturn = {
           status: status.SUCCESS,
           error: '',
           data: null
       }

       got(url, options)
           .then(response => {
               toreturn.data = JSON.parse(response.body)
               res.status(status.SUCCESS).send(toreturn);
           })
           .catch(err => {
               toreturn.status = status.SERVER_ERROR;
               toreturn.error = err;
               res.status(status.SUCCESS).send(toreturn)
           })
}

module.exports = ProxyMiddleware;
