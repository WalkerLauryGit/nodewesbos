const express = require('express');
const StoreController = require('../controllers/StoreController');
const router = express.Router();

const { catchErrors} = require('../handlers/errorHandlers')
// Do work here
router.get('/', StoreController.homePage);
router.get('/add', StoreController.addStore)
router.post('/add', catchErrors(StoreController.createStore))

module.exports = router;
