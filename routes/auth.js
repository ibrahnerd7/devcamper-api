const express=require('express');
const {register,login, getMe, forgotPassword,resetPassword, updateDetails, logout}=require('../controllers/auth');

const router=express.Router();

const {protect}=require('../middlewares/auth');

router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',protect,getMe);
router.post('/forgotpassword',forgotPassword);
router.put('/resetpassword/:resetToken',resetPassword)
router.put('/updatedetails',protect,updateDetails);



module.exports=router;