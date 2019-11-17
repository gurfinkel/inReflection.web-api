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

/**
 * Get occasion
 * @public
 */
exports.get = async (req, res, next, id) => {
    try {
        const item = await Occasion.get(id);
        
        res.json(item.transform());
    } catch (error) {
        return next(error);
    }
};

/**
 * Delete occasion
 * @public
 */
exports.remove = (req, res, next, id) => {
    Occasion.findOneAndDelete(id, { useFindAndModify: false, })
        .then(() => res.status(httpStatus.NO_CONTENT).end())
        .catch(e => next(e));
};

/**
 * Replace existing occasion
 * @public
 */
exports.replace = async (req, res, next, id) => {
    try {
    } catch (error) {
        next(error);
    }
};

/**
 * Update existing occasion
 * @public
 */
exports.update = async (req, res, next, id) => {
    try {
        Occasion.findOneAndUpdate({ _id: id, }, req.body, { new: true, useFindAndModify: false, })
            .then(savedOccasion => res.json(savedOccasion.transform()))
            .catch(e => next(e));
    } catch (error) {
        return next(error);
    }
};
