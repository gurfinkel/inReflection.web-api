const Garment = require('../models/garment.model');

exports.create = function (req, res) {
    var newGarment = new Garment(req.body);

    console.log(req.body);

    newGarment.save(function (err) {
        if (err) {
            res.status(400).send('Unable to save garment to database');
        } else {
            res.redirect('/garments');
        }
    });
};

exports.list = function (req, res) {
    Garment.find({}).exec(function (err, garments) {
        if (err) {
            return res.send(500, err);
        }
        //console.log(garments);
        res.json(garments);
    });
};
