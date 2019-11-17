const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const httpStatus = require('http-status');
const APIError = require('../utils/APIError');

/**
 * Occasion Types
 */
const types = ['for_boys', 'for_girls'];

/**
 * Occasion Schema
 * @private
 */
const occasionSchema = new Schema({
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
occasionSchema.method({
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
occasionSchema.statics = {
    /**
     * Get occasion
     *
     * @param {ObjectId} id - The objectId of occasion.
     * @returns {Promise<Occasion, APIError>}
     */
    async get(id) {
        try {
            let occasion;
            
            if (mongoose.Types.ObjectId.isValid(id)) {
                occasion = await this.findById(id).exec();
            }
            if (occasion) {
                return occasion;
            }
            
            throw new APIError({
                message: 'Occasion does not exist',
                status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },
    /**
     * List occasion in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of occasions to be skipped.
     * @returns {Promise<Occasion[]>}
     */
    list({
             page = 1, perPage = 30, type = 'for_boys',
         }) {
        return this.find({ type: type })
            .sort({ createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage)
            .exec();
    },
};

/**
 * @typedef Occasion
 */
module.exports = mongoose.model('Occasion', occasionSchema);
