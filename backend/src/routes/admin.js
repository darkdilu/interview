const express = require('express');
const router = express.Router();
const districtController = require('../controller/admin_controller/district_controller');
const cityController = require('../controller/admin_controller/city_controller');
const stateController = require('../controller/admin_controller/state_controller');
const countryController = require('../controller/admin_controller/country_controller');

router.post('/add_district', districtController.addDistrict);
router.post('/add_city', cityController.addCity);
router.post('/add_state', stateController.addState);
router.post('/add_countries', countryController.addCountry);






module.exports = router;