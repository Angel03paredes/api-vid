const InventarioSchema = require("./../models/inventario")
const UserSchema = require("./../models/user")

exports.addInventario = async(req,res)=>{
    try{
        const {money,health,speed,id,userName} = req.body;
        if(!money || !health || !speed )
        return res.send({data:null,message:"Provee los datos money,health,speed e id"})

        const user = await InventarioSchema.findOne({$or:[{_id:id},{userName}]});
        if(!user)
            return res.send({data:null,message:"El usuario no existe"})
        
        const inventory = await InventarioSchema.create({money,health,speed})
        const updatedUser = await UserSchema.findOneAndUpdate({$or:[{_id:id},{userName}]},{$set:{inventory:inventory._id}},{new:true}).populate("inventory")
        res.send({data:updatedUser})
    }catch(error){
        console.error(error);
        res.send({data:null,message:String(error)})
        
    }
}