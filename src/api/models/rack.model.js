const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Rack Types
 */
const types = ['for_boys', 'for_girls'];

/**
 * Rack Schema
 * @private
 */
const rackSchema = new Schema({
    name: {
        type: String,
        maxlength: 128,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        enum: types,
        default: 'for_boys',
    },
    items: {
        type: Array,
        required: true,
        default : [],
    },
}, {
    timestamps: true,
});

/**
 * Methods
 */
rackSchema.method({
    transform() {
        const transformed = {};
        const fields = ['id', 'name', 'type', 'items', 'createdAt'];

        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        return transformed;
    },
});

/**
 * Statics
 */
rackSchema.statics = {
    /**
     * Get rack
     *
     * @param {ObjectId} id - The objectId of rack.
     * @returns {Promise<Rack, APIError>}
     */
    async get(id) {
        try {
            let rack;

            if (mongoose.Types.ObjectId.isValid(id)) {
                rack = await this.findById(id).exec();
            }
            if (rack) {
                return rack;
            }

            throw new APIError({
                message: 'Rack does not exist',
                status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },
    /**
     * List rack in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of racks to be skipped.
     * @returns {Promise<Rack[]>}
     */
    list({
             page = 1, perPage = 100, type = 'for_boys',
         }) {
        return this.find({ type: type })
            .sort({ createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage)
            .exec();
    },
};

/**
 * @typedef Rack
 */
module.exports = mongoose.model('Rack', rackSchema);
