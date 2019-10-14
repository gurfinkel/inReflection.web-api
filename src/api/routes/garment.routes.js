const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const controller = require('../controllers/garment.controller');

router.get('/', function(req, res, next){
    controller.list(req, res, next);
});

router.post('/add', upload.single('picture'), function(req, res, next) {
    controller.create(req, res, next);
});

module.exports = router;
