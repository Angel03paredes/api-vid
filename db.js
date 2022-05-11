const {connect} = require("mongoose")

module.exports = async()=>{
   try{
    await connect("mongodb+srv://videojuegoslinea:videojuegoslinea@videojuegoslinea.pbblq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    console.log("DB is connected")
   }catch(error){
    console.error(error);
   }
}