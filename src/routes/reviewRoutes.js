import express from 'express';
import {
  createReview,
  getReviewsByProduct
} from '../controller/reviewController.js';

const router = express.Router();

router.post('/', createReview);
router.get('/:productId', getReviewsByProduct);

export default router;
