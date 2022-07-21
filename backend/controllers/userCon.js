import UserModel from "../models/user.js"



class userController{

    static products = async(req, res) => {

      try {
        const {name,price,st,quantity,pjl} = req.body;
        const pimage = req.files['pimage'][0].filename
        const rdoc = req.files['rdoc'][0].filename

if (name &&  price && pimage && quantity) {
  const user = new UserModel({
    name,price,st,quantity,pjl,pimage,rdoc
     
    });
   const doc = user.save()

   if (doc) {
    res.status(400).send(doc)
   } else {
    res.status(400).send({error})
    
   }
  
  
} else {
  res.status(400).send({message:"all fields are require"})
}   } catch (error) {
        console.log(error)
      }}
      


      
static getProducts = async (req, res) => {

      UserModel.find({}).exec((error,categories)=>{
               
        if (error) res.status(400).json({message:error})
        
        if (categories) {
            //const categoryList = createCategories(categories);//
            res.status(200).json(categories)
        }
     })

    }
    static getProductbyId = async (req, res) => {

      const {id} = req.params.id;

      const productbyid =  UserModel.find({id:_id})
   

        if (!productbyid) res.status(400).json({message:error})
        
        if (productbyid) {
            //const categoryList = createCategories(categories);//
            res.status(200).json({productbyid})
        }
        
     }

    }

    

export default userController ;