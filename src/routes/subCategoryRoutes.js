import express from 'express';
import {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory
} from '../controller/subCategoryController.js';

const router = express.Router();

router.post('/', createSubCategory);
router.get('/', getAllSubCategories);
router.get('/:id', getSubCategoryById);
router.put('/:id', updateSubCategory);

export default router;
