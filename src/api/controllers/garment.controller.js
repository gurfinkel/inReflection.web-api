const fs = require('fs');
const httpStatus = require('http-status');
const Garment = require('../models/garment.model');

/**
 * Create new garment
 * @public
 */
exports.create = async (req, res, next) => {
    try {
        const item = new Garment(req.body);
        item.picture = fs.readFileSync(req.file.path, "Base64");
        const savedItem = await item.save();
        res.status(httpStatus.CREATED);
        res.json(savedItem.transform());
    } catch (error) {
        next(error);
    }
};

/**
 * Get garment list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
        const items = await Garment.list(req.query);
        const transformedItems = items.map(item => item.transform());
        res.json(transformedItems);
    } catch (error) {
        next(error);
    }
};

/**
 * Get garment
 * @public
 */
exports.get = async (req, res, next, id) => {
    try {
        const item = await Garment.get(id);
        
        res.json(item.transform());
    } catch (error) {
        return next(error);
    }
};

/**
 * Delete garment
 * @public
 */
exports.remove = (req, res, next, id) => {
    Garment.findOneAndDelete(id, { useFindAndModify: false, })
        .then(() => res.status(httpStatus.NO_CONTENT).end())
        .catch(e => next(e));
};

/**
 * Replace existing garment
 * @public
 */
exports.replace = async (req, res, next, id) => {
    try {
    } catch (error) {
        next(error);
    }
};

/**
 * Update existing garment
 * @public
 */
exports.update = async (req, res, next, id) => {
    try {
        Garment.findOneAndUpdate({ _id: id, }, req.body, { new: true, useFindAndModify: false, })
            .then(savedGarment => res.json(savedGarment.transform()))
            .catch(e => next(e));
    } catch (error) {
        return next(error);
    }
};
