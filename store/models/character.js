const Sequelize = require("sequelize")
const db = require("../../dbConnection/db");

class Character extends Sequelize.Model {};

Character.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weigth: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    history: {
        type: Sequelize.TEXT,
        allowNull: false
    }
  },
  { sequelize: db, modelName: "character" }
);

module.exports = Character;