const {Schema,model, Types} = require("mongoose")


const UserSchema = new Schema({
    userName:{
        type:String,
        unique:true
    },
    email:{
        type:String
    },
    inventory:{
        type:Types.ObjectId,
        ref:"InventarioSchema"
    }
    
},{versionKey:false,timestamps:true})

module.exports = model("UserSchema",UserSchema)