const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Garment Types
 */
const types = ['for_boys', 'for_girls'];

/**
 * Garment Schema
 * @private
 */
const garmentSchema = new Schema({
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
    picture: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
});

/**
 * Methods
 */
garmentSchema.method({
    transform() {
        const transformed = {};
        const fields = ['id', 'name', 'type', 'picture', 'createdAt'];

        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        return transformed;
    },
});

/**
 * Statics
 */
garmentSchema.statics = {
    /**
     * Get garment
     *
     * @param {ObjectId} id - The objectId of garment.
     * @returns {Promise<Garment, APIError>}
     */
    async get(id) {
        try {
            let garment;
            
            if (mongoose.Types.ObjectId.isValid(id)) {
                garment = await this.findById(id).exec();
            }
            if (garment) {
                return garment;
            }
            
            throw new APIError({
                message: 'Garment does not exist',
                status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },
    /**
     * List garment in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of garments to be skipped.
     * @returns {Promise<Garment[]>}
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
 * @typedef Garment
 */
module.exports = mongoose.model('Garment', garmentSchema);
