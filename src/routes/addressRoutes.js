import express from 'express';
import {
  createAddress,
  getAddressesByUser,
  updateAddress
} from '../controller/addressController.js';

const router = express.Router();

router.post('/', createAddress);
router.get('/:userId', getAddressesByUser);
router.put('/:id', updateAddress);

export default router;
