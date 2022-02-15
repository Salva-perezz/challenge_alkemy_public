const Sequelize = require("sequelize");
const { USER, PASSWORD, DATABASE } = require('../config').DB

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = sequelize