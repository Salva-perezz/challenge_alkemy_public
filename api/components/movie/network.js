const express = require('express');
const router = express.Router();
const { getMovies, insertMovie, deleteMovie, updateMovie } = require('./controllers')



router.get('/', getMovies);
router.post('/', insertMovie);
router.delete('/:id', deleteMovie);
router.put('/:id', updateMovie);


module.exports = router;