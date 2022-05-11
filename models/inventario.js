const {Schema,model,Types} = require("mongoose")


const InventarioSchema = new Schema({

    money:String,
    health:{
        type:Boolean,
        default:false
    },
    speed:{
        type:Boolean,
        default:false
    },
    
},{versionKey:false,timestamps:true})

module.exports = model("InventarioSchema",InventarioSchema)