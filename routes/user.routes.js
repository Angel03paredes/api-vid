const { Router } = require("express");
const { addUSer, getAll, getOne, clear } = require("../controllers/user.controller");


const routes = Router()

routes.post("/add",addUSer)
routes.get("/all",getAll)
routes.get("/",getOne)
routes.get("/drop",clear)


module.exports = routes