import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    pimage:{type:String,required:true},
    price:{type:String,required:true},
    rdoc:{type:String,required:true},
    quantity:{type:String,required:true},
    st:{type:String,required:true},
    pjl:{type:String,required:true},
   
  
  

})


const UserModel = mongoose.model('UserModel',studentSchema);


 export default UserModel;
