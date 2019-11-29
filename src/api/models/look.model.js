const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Look Types
 */
const types = ['for_boys', 'for_girls'];

/**
 * Look Schema
 * @private
 */
const lookSchema = new Schema({
    name: {
        type: String,
        maxlength: 128,
        required: true,
        trim: true,
    },
    ingredients: {
        type: Array,
        required: true,
        default : [],
    },
    description: {
        type: String,
        trim: true,
    },
    recipe: {
        type: String,
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
lookSchema.method({
    transform() {
        const transformed = {};
        const fields = ['id', 'name', 'ingredients', 'description', 'recipe', 'type', 'picture', 'createdAt'];

        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        return transformed;
    },
});

/**
 * Statics
 */
lookSchema.statics = {
    /**
     * Get look
     *
     * @param {ObjectId} id - The objectId of look.
     * @returns {Promise<Look, APIError>}
     */
    async get(id) {
        try {
            let look;
            
            if (mongoose.Types.ObjectId.isValid(id)) {
                look = await this.findById(id).exec();
            }
            if (look) {
                return look;
            }
            
            throw new APIError({
                message: 'Look does not exist',
                status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },
    /**
     * List of looks.
     *
     * @param {number} skip - Number of looks to be skipped.
     * @returns {Promise<Look[]>}
     */
    list({
             page = 1, perPage = 100, type = 'for_boys',
         }) {
        return this.find({ type: type })
            .skip(perPage * (page - 1))
            .limit(+perPage)
            .exec();
    },
};

/**
 * @typedef Look
 */
module.exports = mongoose.model('Look', lookSchema);
