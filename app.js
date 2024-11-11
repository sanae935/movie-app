import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); 

const mongoURI = process.env.MONGO_URI;

const app = express();

app.use(bodyParser.json());

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('MongoDB connection error:', err));
  
  app.get('/', (req, res) => {
    res.send('Welcome to the Movie Review API');
  });
  import movieRoutes from './routes/movieRoutes.js';
  app.use('/api/movies', movieRoutes);
 

  const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
