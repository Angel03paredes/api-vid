const { Router } = require("express");
const { addInventario } = require("../controllers/inventario.controller");


const routes = Router();

routes.post("/setInventory",addInventario)

module.exports = routes