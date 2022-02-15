const Sequelize = require("sequelize")
const db = require("../../dbConnection/db");

class Movie extends Sequelize.Model {};

Movie.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    creation_date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    calification: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  },
  { sequelize: db, modelName: "movie" }
);

module.exports = Movie;