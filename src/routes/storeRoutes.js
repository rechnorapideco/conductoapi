import express from 'express';
import {
  createStore,
  getAllStores,
  getStoreById,
  updateStore
} from '../controller/storeController.js';

const router = express.Router();

router.post('/', createStore);
router.get('/', getAllStores);
router.get('/:id', getStoreById);
router.put('/:id', updateStore);

export default router;
