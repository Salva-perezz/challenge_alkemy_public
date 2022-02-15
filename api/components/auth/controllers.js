const { Auth } = require('../../../store/models');
const errors = require('../../../network/error');
const response = require('../../../network/response');
const bcrypt = require('bcrypt');
const { getLoginToken } = require('../../../auth');

const registerController = async (req, res) => {
    const { username, password, email } = req.body
    const possibleUser = await Auth.findOne({ where: {
        email
    }});

    if(possibleUser) {

        errors({ message: 'The email provided is already in use', statusCode: 409 }, req, res);

    } else if(password.length < 8) {

        errors({ message: 'The password must have more than 8 characters', statusCode: 409 }, req, res);

    } else {

        const encryptedPassword = await bcrypt.hash(password, 5);

        await Auth.create({ username, password: encryptedPassword, email });

        response.succes(req, res, { username }, 201);
    }
};

const loginController = async (req, res) => {
    const { username, password } = req.body;
    const user = await Auth.findOne({ where: {
        username
    }});

    const encryptedPassword = await bcrypt.hash(password, 5);

    if(!user || encryptedPassword === user.password) {

        errors({ message: 'Invalid credentials', statusCode: 401 }, req, res);

    } else {

        const token = await getLoginToken(username);
        
        response.succes(req, res, { token }, 200);

    }

};

module.exports = { registerController, loginController };