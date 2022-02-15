const Sequelize = require("sequelize")
const db = require("../../dbConnection/db");

class Genre extends Sequelize.Model {};

Genre.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "genre" }
);

module.exports = Genre;