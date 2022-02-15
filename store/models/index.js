const Movie = require('./movie');
const Character = require('./character');
const Genre = require('./genre');
const Auth = require('./auth');

/* Character.hasMany(Movie)
Movie.hasMany(Character)
Genre.hasMany(Movie) */

module.exports = { Movie, Character, Genre, Auth };