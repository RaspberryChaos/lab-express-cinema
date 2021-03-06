const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index', {css : ["homepage"]});
});



router.get('/movies', async(req, res, next) => {
    try {
        const movieList = await Movie.find();
        console.log(movieList);
        res.render("movies", {movie: movieList});
    }
    catch(err) {
        next(err);
    }
});

router.get('/movies/:id', async(req, res, next) => {
    try {
        const specificFilm = await Movie.findById(req.params.id);
        res.render("movieDetails", {movie: specificFilm});
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;
