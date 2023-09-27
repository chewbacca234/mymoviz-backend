var express = require('express');
var router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&api_key=${TMDB_API_KEY}`)
        .then(response => response.json())
        .then(data => res.json({result: true, movies: data.results}))
        .catch(err => res.json({ result: false, err }));
});

module.exports = router;