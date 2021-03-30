const express=require('express');
const {register,login, getMe, forgotPassword,resetPassword}=require('../controllers/auth');

const router=express.Router();

const {protect}=require('../middlewares/auth');

router.post('/register',register);
router.post('/login',login);
router.get('/me',protect,getMe);
router.post('/forgotpassword',forgotPassword);
router.put('/resetpassword/:resetToken',resetPassword)


module.exports=router;