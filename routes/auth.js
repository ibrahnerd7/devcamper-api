const express=require('express');
const {register,login, getMe, forgotPassword,resetPassword, updateDetails, updatePassword}=require('../controllers/auth');

const router=express.Router();

const {protect}=require('../middlewares/auth');
const { update } = require('../models/User');

router.post('/register',register);
router.post('/login',login);
router.get('/me',protect,getMe);
router.post('/forgotpassword',forgotPassword);
router.put('/resetpassword/:resetToken',resetPassword)
router.put('/updatedetails',protect,updateDetails);
router.put('/updatepassword',protect,updatePassword);



module.exports=router;