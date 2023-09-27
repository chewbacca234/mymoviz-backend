var express = require('express');
var router = express.Router();

const TMDB_API_READ_ACCES_TOKEN = process.env.TMDB_API_READ_ACCES_TOKEN;

router.get('/', (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + TMDB_API_READ_ACCES_TOKEN
        }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => res.json({result: true, movies: data.results}))
        .catch(err => res.json({ result: false, err }));
});

module.exports = router;