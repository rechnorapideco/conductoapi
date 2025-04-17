import express from 'express';
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory
} from '../controller/categoryController.js';

const router = express.Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);

export default router;
