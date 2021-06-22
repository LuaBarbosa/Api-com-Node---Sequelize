const express = require("express");
const pfController = require("./Controllers/pfControllers");

const routes = express.Router();

routes.get("listar", pfController.listar);
routes.post("criar", pfController.criar);
routes.put("atualizar", pfController.atualizar);
routes.delete("delete", pfController.delete);

module.exports = routes;
