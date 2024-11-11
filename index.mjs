import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import movieRoutes from './routes/movieRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();
app.use(bodyParser.json());

const dbURI = 'mongodb+srv://sanaa:aicha123456@cluster0.kg26p.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('MongoDB connection error:', err));
  
  app.use('/api/movies', movieRoutes);
  app.use('/api/reviews', reviewRoutes);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });