const express = require('express');
const router = express.Router();
const districtController = require('../controller/user_controller/get_district');
const cityController = require('../controller/user_controller/get_city');
const stateController = require('../controller/user_controller/get_state');
const countryController = require('../controller/user_controller/get_country');
const Upload_Excel=require("../controller/user_controller/upload_excel")

const multer = require('multer');




const upload = multer({ storage: multer.memoryStorage() });

router.get('/get_district', districtController.getDistrict);
router.get('/get_city', cityController.getAllCity);
router.get('/get_state', stateController.getState);
router.get('/get_countries', countryController.getCountries);

router.post('/upload_excel', upload.single('file'),Upload_Excel.upload_excel)
   
  




module.exports = router;