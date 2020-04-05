const express = require('express');
const routes = express.Router();


const CarsController =  require('./controller/CarsController');

routes.get("/", CarsController.index);
routes.post("/store", CarsController.store);
routes.get("/search/:license_plate", CarsController.SearchEngine);
routes.delete("/remove/:license_plate", CarsController.removeCar);

module.exports = routes;