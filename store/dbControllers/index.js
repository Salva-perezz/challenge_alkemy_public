const { errors } = require('../../network/error');

const insert = async (objectToInstert, model) => {
    try {
        await model.create(objectToInstert);
        return true;
    } catch (err) {
        return false
    }
};

const destroy = async (id, model) => {
    try {
        await model.destroy({ where: {
            id
        }});
        return true;
    } catch (err) {
        console.log('[ERROR]', err);
        return false;
    }
}

const get = (model) => {
    try {
        const result = model.findAll();
        return result;
    } catch(err) {
        return false;
    };
};

module.exports = { insert, destroy, get };