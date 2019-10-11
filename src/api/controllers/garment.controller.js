const Garment = require('../models/garment.model');

/**
 * Create new garment
 * @public
 */
exports.create = function (req, res, next) {
    var newGarment = new Garment(req.body);

    console.log(req.body);

    newGarment.save(function (err) {
        if (err) {
            res.status(400).send('Unable to save garment to database');
        } else {
            res.json({ status: 'ok' });
        }
    });
};

/**
 * Get garment list
 * @public
 */
exports.list = function (req, res) {
    Garment.find({}).exec(function (err, garments) {
        if (err) {
            return res.send(500, err);
        }
        console.log(garments);
        res.json(garments);
    });
};
