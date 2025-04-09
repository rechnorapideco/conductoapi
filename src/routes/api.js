import express from "express";
import {
  registerUser,
  loginUser,
  getResetOtp,
  resetPassword,
} from "../controller/userController.js";

const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post("/user/get-reset-otp", getResetOtp);
router.post("/user/reset-password", resetPassword);




//category





import {
  createCategory,
  getAllCategories,
  updateCategory,
  getCategoriesByStore,
} from '../controller/categoryController.js';

// Category APIs
router.post('/category', createCategory);
router.get('/category', getAllCategories);
router.put('/category/:id', updateCategory);
router.get('/category/store/:storeId', getCategoriesByStore);











//products
import {
  createProduct,
  getAllProducts,
  updateProduct,
  getProductsByStoreAndCategory,
  getTopRatedProducts,
  getBestSellingProducts,
  getProductsByCategory
} from '../controller/productController.js';

// Product APIs
router.post('/product', createProduct);
router.get('/product', getAllProducts);
router.put('/product/:id', updateProduct);

router.get('/product/store/:storeId/category/:categoryId', getProductsByStoreAndCategory);
router.get('/product/top-rated', getTopRatedProducts);
router.get('/product/best-selling', getBestSellingProducts);

router.get('/product/category/:catId', getProductsByCategory);






//filter

import {
  getCompaniesByStore,
  getCompaniesByCategory,
  getCompaniesByStoreAndCategory,
  getTypesByStore,
  getTypesByCategory,
  getColorsByStore,
  getSizesByStore
} from '../controller/filterController.js';

// Company filters
router.get('/filter/companies/store/:storeId', getCompaniesByStore);
router.get('/filter/companies/category/:categoryId', getCompaniesByCategory);
router.get('/filter/companies/store/:storeId/category/:categoryId', getCompaniesByStoreAndCategory);

// Type filters
router.get('/filter/types/store/:storeId', getTypesByStore);
router.get('/filter/types/category/:categoryId', getTypesByCategory);

// Color filters
router.get('/filter/colors/store/:storeId', getColorsByStore);

// Size filters
router.get('/filter/sizes/store/:storeId', getSizesByStore);



//order 

import {
  createOrder,
  getOrdersByUser,
  getActiveOrders,
  cancelOrder,
  getOrderStatus
} from '../controller/orderController.js';


// Order routes
router.post('/order', createOrder);
router.get('/order/user/:userId', getOrdersByUser);
router.get('/order/user/:userId/active', getActiveOrders);
router.post('/order/:orderId/cancel', cancelOrder);
router.get('/order/:orderId/status', getOrderStatus);



export default router;
