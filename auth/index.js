const jwt = require('jsonwebtoken');
const { secretJWT } = require('../config');
const response = require('../network/response');

const getLoginToken = (data) => {
    return jwt.sign(data, secretJWT);
};

const checkToken = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization || '';
        console.log(authorization)
        if(!authorization) {
            response.error(req, res, { message: 'Token must be provided', statusCode: 400});
            return
        };
        const token = authorization.replace('Bearer ', '');
    
        if(authorization.indexOf('Bearer ') == -1) {
            response.error(req, res, { message: 'Invalid format', statusCode: 400 });
            return
        }
    
        await jwt.verify(token, secretJWT);

        next()
    } catch(err) {
        response.error(req, res, { message: err.message, statusCode: 403 });
    }

  };

module.exports = { getLoginToken, checkToken };