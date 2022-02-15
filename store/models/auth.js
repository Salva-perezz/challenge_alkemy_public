const Sequelize = require("sequelize");
const db = require("../../dbConnection/db");

class Auth extends Sequelize.Model {};

Auth.init(
  {
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
  }
  },
  { sequelize: db, modelName: "auth" }
);

module.exports = Auth;