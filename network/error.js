const response = require('./response');

const errors = (err, req, res, next) => {
    console.log('[ERROR]', err);
    const message = err.message || 'Internal server error';
    const status = err.statusCode || 500;

    response.error(req, res, message, status);
};

module.exports = errors;