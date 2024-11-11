import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    text: String,
  });
  
  reviewSchema.index({ movieId: 1 });
  
export default mongoose.model('Review', reviewSchema);