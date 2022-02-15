const express = require('express');
const router = express.Router();
const { getAllMovies, insertMovie, deleteMovie, updateMovie } = require('./controllers')



router.get('/', getAllMovies);
router.post('/', insertMovie);
router.delete('/:id', deleteMovie);
router.put('/:id', updateMovie);


module.exports = router;