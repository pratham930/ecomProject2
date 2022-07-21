import express from "express";
import userController from "../controllers/user.js";
import authenticate from "../middleware/authenticate.js";
import upload from "../middleware/upload.js";

 
const router = express.Router()

router.use( '/singup',upload.fields([{name:'pimage',maxcount:1}]))
router.post ('/singup', userController.singup)
router.post ('/login',userController.login)
router.get ('/logout',userController.logout)
router.get ('/details', userController.details)



 export default router;