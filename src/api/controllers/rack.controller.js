const httpStatus = require('http-status');
const Rack = require('../models/rack.model');

/**
 * Create new rack
 * @public
 */
exports.create = async (req, res, next) => {
    try {
        const item = new Rack(req.body);
        const savedItem = await item.save();
        res.status(httpStatus.CREATED);
        res.json(savedItem.transform());
    } catch (error) {
        next(error);
    }
};

/**
 * Get rack list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
        const items = await Rack.list(req.query);
        const transformedItems = items.map(item => item.transform());
        res.json(transformedItems);
    } catch (error) {
        next(error);
    }
};
