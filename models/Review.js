const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    text: String,
  });
  
  module.exports = mongoose.model('Review', reviewSchema);