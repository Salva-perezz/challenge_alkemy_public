const { Movie } = require("../../../store/models");
const response = require('../../../network/response');
const { isObjectEmpty, filterFunction, checkQuery } = require('../../../utils');
const { insert, destroy, get } = require('../../../store/dbControllers');

const getMovies = async (req, res) => {
    try {
        let movies = await get(Movie);
        
        if(!isObjectEmpty(req.query)) {
            if(checkQuery(req.query)) {
                movies = filterFunction(req.query, movies);
            } else {
                response.error(req, res, 'Invalid query', 400);
                return;
            };
        };
        
        if(!movies.length) {
            response.error(req, res, 'Not found', 404);
        } else {
            response.succes(req, res, movies, 200);
        }
    } catch(err) {
        response.error(req, res, err.message, 500);
    };
};

const insertMovie = async (req, res) => {
        const { title, image, creation_date, calification } = req.body;

        const succesStatus = await insert({ title, image, creation_date, calification }, Movie);

        if(succesStatus) {
            response.succes(req, res, 'Movie created', 201)
        } else {
            response.error(req, res, 'Internal server error', 500)
        }
}

const deleteMovie = async (req, res) => {
        const { id } = req.params;

        const succesStatus = await destroy(id, Movie);
        if(succesStatus) {
            response.succes(req, res, 'Movie deleted succesfully', 204);
        } else {
            response.error(req, res, 'Internal server error', 500)
        };
};

const updateMovie = async (req, res) => {
    try {
        const { changes } = req.body;
        const { id } = req.params;

        if(!changes) {
            response.error(req, res, 'No changes provided', 400);
        } else {
            await Movie.update(changes, {
                where: {
                    id
                }
            });
    
            response.succes(req, res, 'Movie updated succesffully', 200);
        };

    } catch(err) {
        response.error(req, res, 'Internal server error', 500);
    }
}

module.exports = { getMovies, insertMovie, deleteMovie, updateMovie };