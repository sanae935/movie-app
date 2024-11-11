const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/:movieId', async (req, res) => {
    try {
      const reviews = await Review.find({ movieId: req.params.movieId });
      res.json(reviews);
    } catch (err) {
      res.status(500).send('Error fetching reviews');
    }
  });
  