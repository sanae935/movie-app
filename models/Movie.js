 import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  genre: { type: String, required: true },
});

movieSchema.index({ title: 1 });

export default mongoose.model('Movie', movieSchema);
