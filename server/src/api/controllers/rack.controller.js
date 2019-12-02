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

/**
 * Get rack
 * @public
 */
exports.get = async (req, res, next, id) => {
    try {
        const item = await Rack.get(id);

        res.json(item.transform());
    } catch (error) {
        return next(error);
    }
};

/**
 * Delete rack
 * @public
 */
exports.remove = (req, res, next, id) => {
    Rack.findOneAndDelete(id, { useFindAndModify: false, })
        .then(() => res.status(httpStatus.NO_CONTENT).end())
        .catch(e => next(e));
};

/**
 * Replace existing rack
 * @public
 */
exports.replace = async (req, res, next, id) => {
    try {
    } catch (error) {
        next(error);
    }
};

/**
 * Update existing rack
 * @public
 */
exports.update = async (req, res, next, id) => {
    try {
        Rack.findOneAndUpdate({ _id: id, }, req.body, { new: true, useFindAndModify: false, })
            .then(savedRrack => res.json(savedRrack.transform()))
            .catch(e => next(e));
    } catch (error) {
        return next(error);
    }
};
