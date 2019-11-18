const fs = require('fs');
const httpStatus = require('http-status');
const Look = require('../models/look.model');

/**
 * Create new look
 * @public
 */
exports.create = async (req, res, next) => {
    try {
        const item = new Look(req.body);
        item.picture = fs.readFileSync(req.file.path, "Base64");
        const savedItem = await item.save();
        res.status(httpStatus.CREATED);
        res.json(savedItem.transform());
    } catch (error) {
        next(error);
    }
};

/**
 * Get look list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
        const items = await Look.list(req.query);
        const transformedItems = items.map(item => item.transform());
        res.json(transformedItems);
    } catch (error) {
        next(error);
    }
};

/**
 * Get look
 * @public
 */
exports.get = async (req, res, next, id) => {
    try {
        const item = await Look.get(id);
        
        res.json(item.transform());
    } catch (error) {
        return next(error);
    }
};

/**
 * Delete look
 * @public
 */
exports.remove = (req, res, next, id) => {
    Look.findOneAndDelete(id, { useFindAndModify: false, })
        .then(() => res.status(httpStatus.NO_CONTENT).end())
        .catch(e => next(e));
};

/**
 * Replace existing look
 * @public
 */
exports.replace = async (req, res, next, id) => {
    try {
    } catch (error) {
        next(error);
    }
};

/**
 * Update existing look
 * @public
 */
exports.update = async (req, res, next, id) => {
    try {
        Look.findOneAndUpdate({ _id: id, }, req.body, { new: true, useFindAndModify: false, })
            .then(savedLook => res.json(savedLook.transform()))
            .catch(e => next(e));
    } catch (error) {
        return next(error);
    }
};
