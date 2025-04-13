import express from "express";
import {
  registerUser,
  loginUser,
  getResetOtp,
  resetPassword,
} from "../controller/userController.js";

import {
  createProduct,
  getAllProducts,
  updateProduct,
  getProductsByStoreAndCategory,
  getTopRatedProducts,
  getBestSellingProducts,
  getProductsByCategory,
} from "../controller/productController.js";

import {
  createOrder,
  getOrdersByUser,
  getActiveOrders,
  cancelOrder,
  getOrderStatus,

} from "../controller/orderController.js";
import { createBrand, getAllBrands } from "../controller/brandController.js";
import { createOffer, getOffers } from "../controller/offerController.js";

import {
  createStore,
  updateStore,
  getAllStoresWithDetails,
} from "../controller/storeController.js";
import {
  getCompaniesByStore,
  getCompaniesByCategory,
  getCompaniesByStoreAndCategory,
  getTypesByStore,
  getTypesByCategory,
  getColorsByStore,
  getSizesByStore,
} from "../controller/filterController.js";

import {
  createCategory,
  getAllCategories,
  updateCategory,
  getCategoriesByStore,
  getCategoryById 
} from "../controller/categoryController.js";

import { createAd, getAllAds } from '../controller/adController.js';
import {
  createSlider1, getSlider1,

} from '../controller/sliderController.js';


const router = express.Router();






















//user

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post("/user/get-reset-otp", getResetOtp);
router.post("/user/reset-password", resetPassword);

// Category APIs
router.post("/category", createCategory);
router.get('/category/:id', getCategoryById);

router.get("/category", getAllCategories);
router.put("/category/:id", updateCategory);
router.get("/category/store/:storeId", getCategoriesByStore);

// Product APIs
router.post("/product", createProduct);
router.get("/product", getAllProducts);
router.put("/product/:id", updateProduct);

router.get(
  "/product/store/:storeId/category/:categoryId",
  getProductsByStoreAndCategory
);
router.get("/product/top-rated", getTopRatedProducts);
router.get("/product/best-selling", getBestSellingProducts);

router.get("/product/category/:catId", getProductsByCategory);

// Company filters
router.get("/filter/companies/store/:storeId", getCompaniesByStore);
router.get("/filter/companies/category/:categoryId", getCompaniesByCategory);
router.get(
  "/filter/companies/store/:storeId/category/:categoryId",
  getCompaniesByStoreAndCategory
);

// Type filters
router.get("/filter/types/store/:storeId", getTypesByStore);
router.get("/filter/types/category/:categoryId", getTypesByCategory);

// Color filters
router.get("/filter/colors/store/:storeId", getColorsByStore);

// Size filters
router.get("/filter/sizes/store/:storeId", getSizesByStore);

// Order routes
router.post("/order", createOrder);
router.get("/order/user/:userId", getOrdersByUser);
router.get("/order/user/:userId/active", getActiveOrders);
router.post("/order/:orderId/cancel", cancelOrder);
router.get("/order/:orderId/status", getOrderStatus);

//store

router.post("/stores", createStore); // Create store
router.put("/stores/:id", updateStore); // Update store
router.get("/stores", getAllStoresWithDetails); // Get all with details (already exists)

//offers

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
