import registration from "../models/Schema.js"
import  bcrypt from "bcryptjs"
import cookieParser from "cookie-parser"





class userController{

    // static singup = async(req, res) => {
      
    //     // const { name, email, mobile, work, password, cpassword} =req.body
  
    //     // if (!name || !email || !password || !mobile || !cpassword ) {
    //     //   return res.status(422).json({error:"plz fill all data"})
    //     // }
    //   try {
    //     const { name, email, mobile, password, cpassword,work} =req.body
  
    //     // if (!name || !email || !password || !mobile || !cpassword ) {
    //     //   return res.status(422).json({error:"plz fill all data"})
    //     // }
    //     const userExits = await registration.findOne({email:email})
    //     if(userExits){
    //       return res.status(422).send({error:"email already exists"})
    //     } else if (password != cpassword) {
    //       return res.status(422).send({error:"password in not matching"})
    //     } else {
    //       const register = new  registration({name,email,password,work,cpassword,mobile})
    //         await register.save()
    //       res.status(201).send({message:"succesfull",})
    //     }  }
    //    catch (error) {
    //     console.log(error)
    //     return res.status(422).json({error:"not found data"})
    //   }
    //   }
    

      static singup = async(req, res) => {

        try {
          const {name,email,password,cpassword,work,mobile} = req.body;
          const pimage = req.files['pimage'][0].filename
          
        if (!name || !email || !password || !mobile || !cpassword ) {
          return res.status(422).json({error:"plz fill all data"})
        }
        const userExits = await registration.findOne({email:email})
        if(userExits){
          return res.status(422).send({error:"email already exists"})
        } else if (password != cpassword) {
          return res.status(422).send({error:"password in not matching"})
        } else {
          const register = new  registration({name,email,password,work,cpassword,mobile,pimage})
            await register.save()
          res.status(201).send({message:"succesfull",})
        }  }
       catch (error) {
        console.log(error)
        return res.status(422).json({error:"not found data"})
      }
      }
    

static login = async(req, res) => {
  
    try {
        const {email,password} = req.body
      
      if (!email || !password) {
        return res.status(400).json({error:"pls filled data"})
      }
      
      const userLogin = await registration.findOne({email:email});
      if (userLogin) {
        
        const isMatch = await bcrypt.compare(password,userLogin.password)
      
        const token = await userLogin.generateAuthToken();
        console.log(token); 
        res.cookie("jwtoken", token,{
            expires:new Date(Date.now() + 258900000),
           httpOnly:true});
         
         !isMatch?res.status(400).send({message:"error"}):res.json({message:"user login succesfully" })
           
         }
         else{res.status(400).send({message:"filled invalid data"})}
         
         
         } catch (error) {
           console.log(error);
         } 
         };

      

static logout = async (req,res)=>{
                console.log(`hello logout page`);
                res.clearCookie("jwtoken",{path:"/"})
     res.status(200).send("logoutUser")
                };
                
                
  static details = async (req,res)=>{
    registration.find({}).exec((error,categories)=>{
               
      if (error) res.status(400).json({message:error})
      
      if (categories) {
          //const categoryList = createCategories(categories);//
          res.status(200).json(categories)
      }
   })

  }}

    export default userController ;