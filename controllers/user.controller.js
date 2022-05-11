
const UserSchema = require("./../models/user")
const InventarioSchema = require("./../models/inventario")

exports.addUSer=async(req,res)=>{
  try{
    const {userName,email}= req.body
    const inventory = await InventarioSchema.create({money:"0"})
    const user = await UserSchema.create({userName:userName||"",email:email||"",inventory:inventory._id})
    res.send({data:user,message:"Usuario creado"})
  }catch(error){
      console.log(error);
      res.send({data:null,message:String(error)})
  }
}

exports.getAll = async(req,res)=>{
  try{
    const users = await UserSchema.find().populate("inventory");
    res.send({data:users,message:"Usuarios encontrados"})
  }catch(error){
    console.log(error);
    res.send({data:null,message:"Error interno de servidor "})
  }
}

exports.getOne =async(req,res)=>{
  try{
    const {userName,email,id} = req.query;
    const user = await UserSchema.findOne({$or:[{userName},{email},{_id:id}]}).populate("inventory")
    if(!user)
      return res.send({data:null,message:"Usuario no encontrado"})

    res.send({data:user,message:"Usuario encontrado"})
  }catch( error){
    console.log(error);
    res.send({data:null,message:"Error interno del servidor"})
  }
}

exports.clear =async(req,res)=>{
  try{
    await UserSchema.collection.drop()
    res.send({message:"success"})
  }catch( error){
    console.log(error);
    res.send({data:null,message:"Error interno del servidor"})
  }
}

