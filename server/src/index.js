import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const postsRoutes = require('./routes/postsRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const middlewares = require('./middleware/middlewares');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const ErrorResponse = require('./middleware/ErrorResponse');

dotenv.config();

const port = process.env.PORT || 4000;

// Set Mongoose `strictQuery` option
mongoose.set('strictQuery', false);

const startServer = async () => {
  const app = express();

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }

  app.use(morgan('dev'));
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
  });

  // Health Check Endpoint
  app.get('/health', (req, res) => {
    res.json({ status: 'UP', timestamp: new Date() });
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Define routes
  app.use('/user', userRoutes);
  app.use('/admin', adminRoutes);
  app.use('/posts', postsRoutes);
  app.use('/comments', commentsRoutes);

  // Error handling
  app.use(middlewares.notFound);
  app.use(middlewares.errorHandler);

  // Start server
  app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:${port}`)
  );
};

startServer();
