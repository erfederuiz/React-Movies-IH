const express = require('express');
const router  = express.Router();
//
const Movie = require('../models/movie');

router.get('/all', (req, res, next) => {
  Movie.find({})
  .then((movies)=>{
    console.log(movies);
    res.json(movies);
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.get('/one/:movieId', (req, res, next) => {
  var id = req.params.movieId;
  Movie.findById(id)
  .then((movie)=>{
    res.json(movie);
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.post('/new', (req, res, next) => {  
  console.log(req.body)
  const { title, year, director, duration, genre, rate, image_url } = req.body;
  const newMovie = new Movie({ title, year, director, duration, genre, rate, image_url })
  newMovie.save()
    .then((movie) => {
      res.json(movie);
    })
    .catch((error) => {
      console.log(error);
    })
});


router.delete('/delete/:movieId', (req, res, next) => {
  var id = req.params.movieId;
  console.log(id);
  Movie.findByIdAndRemove(id)
  .then((movie)=>{
    res.redirect('/all');
  })
  .catch((err)=>{
    console.log(err);
  })
});


router.put('/update/:movieId' , (req, res, next) =>{
  var id = req.params.movieId;
  console.log(req.body);
  const { title, year, director, duration, genre, rate, image_url } = req.body ;
  console.log(id, title, year, director, duration, genre, rate, image_url);
  Movie.findByIdAndUpdate(id, req.body, {new: true})
  .then((movie)=>{
    console.log(movie);
    res.json(movie);
  })
  .catch(next)
});

module.exports = router;