const mongoose = require('mongoose');

const flagSchema = new mongoose.Schema({
    name: String,
    src: String
});

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    flag: flagSchema,
    photo: String
});

mongoose.model('Staff', staffSchema);
