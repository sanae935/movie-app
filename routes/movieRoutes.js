const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (err) {
      res.status(500).send('Error fetching movies');
    }
  });
  router.post('/', async (req, res) => {
    const { title, genre } = req.body;
  
    try {
      const newMovie = new Movie({ title, genre });
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (err) {
      res.status(400).send('Error adding movie');
    }
  });
  
  module.exports = router;