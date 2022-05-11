const express = require("express")
const userRoutes = require("./routes/user.routes")
const inventoryRoutes = require("./routes/inventario.routes")

const app = express();
require("./db")()

app.use(express.json())
app.use("/user",userRoutes)
app.use("/inventory",inventoryRoutes)

app.listen(process.env.PORT || 3000,()=>{
    console.log("Listening on port 3000" );
})