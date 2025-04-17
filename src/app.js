import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import others from './routes/api.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD









//imports 

import storeRoutes from './routes/storeRoutes.js';
import userRoutes from './routes/UserRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import subCategoryRoutes from './routes/subCategoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import ratingRoutes from './routes/ratingRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';






//usages 



app.use("/api/user", userRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use("/api/others/", others);
=======
app.use("/api", userRoutes);
>>>>>>> b16b73d2a750ab45b471d18edd23ab635b0be070

export default app;
