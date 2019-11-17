const httpStatus = require('http-status');
const Occasion = require('../models/occasion.model');

/**
 * Create new occasion
 * @public
 */
exports.create = async (req, res, next) => {
    try {
        const item = new Occasion(req.body);
        const savedItem = await item.save();
        res.status(httpStatus.CREATED);
        res.json(savedItem.transform());
    } catch (error) {
        next(error);
    }
};

/**
 * Get occasion list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
        const items = await Occasion.list(req.query);
        const transformedItems = items.map(item => item.transform());
        res.json(transformedItems);
    } catch (error) {
        next(error);
    }
};
