const express = require('express');
const router = express.Router();

const controller = require('../controllers/garment.controller');

router.get('/', function(req, res, next){
    controller.list(req, res, next);
});

router.post('/addgarment', function(req, res, next) {
    controller.create(req, res, next);
});

module.exports = router;
