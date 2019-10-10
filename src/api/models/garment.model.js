const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Garment = new Schema ({
    name: { type: String, required: true },
});

module.exports = mongoose.model('wardrobe_for_girls', Garment);
