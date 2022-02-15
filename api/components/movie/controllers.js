const { Movie } = require("../../../store/models");
const response = require('../../../network/response');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();

        response.succes(req, res, movies, 200);
    } catch(err) {
        response.error(req, res, err.message, 500);
    };
};

const getOneMovie = (req, res) => {
    try {
        const { id } = req.params;
    } catch(err) {
        response.error(req, res, 'Internal server error', 500);
    };
};

const insertMovie = async (req, res) => {
    try {
        const { title, image, creation_date, calification } = req.body;

        await Movie.create({ title, image, creation_date, calification });

        response.succes(req, res, 'Movie created', 201)
    } catch(err) {
        response.error(req, res, err.message, 500);
    };
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;

        await Movie.destroy({ where: {
            id
        }});

        response.succes(req, res, 'Movie deleted succesfully', 204);
    } catch(err) {
        console.log(err)
        response.error(req, res, 'Internal server error', 500);
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

module.exports = { getAllMovies, insertMovie, deleteMovie, updateMovie };