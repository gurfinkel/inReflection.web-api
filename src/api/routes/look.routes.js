const express = require('express');
const router = express.Router();

const controller = require('../controllers/look.controller');

router.get('/', function(req, res, next){
    controller.list(req, res, next);
});

module.exports = router;
