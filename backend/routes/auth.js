import express from "express"
import userController from "../controllers/userCon.js"
import upload from "../middleware/upload.js"
import authenticate from "../middleware/authenticate.js";
const router = express.Router()

router.use( '/products',upload.fields([{name:'pimage',maxcount:1},{name:'rdoc',maxcount:1}]))
router.post ('/products',userController.products)
router.get ('/getProducts', userController.getProducts)



 export default router;