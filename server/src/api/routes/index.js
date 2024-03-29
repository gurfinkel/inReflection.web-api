const express = require('express');
const router = express.Router();

router.get('/ready', function (req, res) {
    res.send('Born ready!');
});

router.get('/health', function (req, res) {
    res.send('Healthy as a horse');
});

router.use('/garments', require('./garment.routes'));
router.use('/looks', require('./look.routes'));
router.use('/occasions', require('./occasion.routes'));
router.use('/racks', require('./rack.routes'));

module.exports = router;
