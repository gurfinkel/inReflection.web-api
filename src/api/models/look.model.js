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
        maxlength: 128,
        required: true,
        trim: true,
    },
    recipe: {
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
     * List look in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of looks to be skipped.
     * @returns {Promise<Look[]>}
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
 * @typedef Look
 */
module.exports = mongoose.model('Look', lookSchema);
