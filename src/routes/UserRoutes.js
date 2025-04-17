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


export default router;
