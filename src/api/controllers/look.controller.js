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
