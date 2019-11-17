const express = require('express');
const router = express.Router();

const controller = require('../controllers/occasion.controller');

router.post('/add', function(req, res, next) {
    controller.create(req, res, next);
});

router.get('/list', function(req, res, next){
    controller.list(req, res, next);
});

router.route('/:itemId')
    .get((req, res, next) => {
        controller.get(req, res, next, req.params.itemId);
    })
    .delete((req, res, next) => {
        controller.remove(req, res, next, req.params.itemId);
    })
    .patch((req, res, next) => {
        controller.update(req, res, next, req.params.itemId);
    })
    .put((req, res, next) => {
        controller.replace(req, res, next, req.params.itemId);
    });

module.exports = router;
