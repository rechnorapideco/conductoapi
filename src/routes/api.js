import express from "express";
import Category from '../models/Category.js';



import{ createOffer, getOffers} from '../controller/offerController.js';
import{ createBrand, getAllBrands} from '../controller/brandController.js';


import { createAd, getAllAds } from '../controller/adController.js';
import {
  createSlider1, getSlider1,

} from '../controller/sliderController.js';


const router = express.Router();






















//user


router.get('/dev/drop-category-index', async (req, res) => {
  try {
    await Category.collection.dropIndex("categoryId_1");
    res.json({ message: "Index categoryId_1 dropped successfully ✅" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});






router.post("/offers", createOffer);
router.get("/offers", getOffers);

//brands
router.post("/brands", createBrand);
router.get("/brands", getAllBrands);

//ads 

router.post('/ads', createAd);
router.get('/ads', getAllAds);






//sliders 


router.post('/slider1', createSlider1);
router.get('/slider1', getSlider1);


















export default router;
