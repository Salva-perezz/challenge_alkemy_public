exports.succes = (req, res, message, status) => {
    const statusCode = status || 200;
    const statusMessage = message || '';

    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: statusMessage
    });
};

exports.error = (req, res, message, status) => {
    console.log('[ERROR]', message);
    const statusCode = status || 500;
    const statusMessage = message || 'Internal server error';
    console.log('Estoy en response error')
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: statusMessage
    });
};