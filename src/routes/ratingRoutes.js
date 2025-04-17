import express from 'express';
import {
  giveRating,
  getProductRatings
} from '../controller/ratingController.js';

const router = express.Router();

router.post('/', giveRating);
router.get('/:productId', getProductRatings);

export default router;
