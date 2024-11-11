import express from 'express';
import Review from '../models/Review.js';


const router = express.Router();

router.get('/:movieId', async (req, res) => {
    try {
      const reviews = await Review.find({ movieId: req.params.movieId });
      res.json(reviews);
    } catch (err) {
      res.status(500).send('Error fetching reviews');
    }
  });
  router.post('/', async (req, res) => {
    const { movieId, rating, text } = req.body;
  
    try {
      const newReview = new Review({ movieId, rating, text });
      await newReview.save();
      res.status(201).json(newReview);
    } catch (err) {
      res.status(400).send('Error adding review');
    }
  });
  
  export default router;