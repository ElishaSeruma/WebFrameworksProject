const mongoose = require('mongoose');

const flagSchema = new mongoose.Schema({
    name: String,
    src: String
});

const statsSchema = new mongoose.Schema({
    assists: {type: Number, "default": 0},
    goals: {type: Number, "default": 0},
    yellowCards: {type: Number, "default": 0},
    redCards: {type: Number, "default": 0},
    minutesPlayed: {type: Number, "default": 0}
});

const playerSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    age: Number,
    flag: flagSchema,
    photo: String,
    stats: statsSchema
});

mongoose.model('Player', playerSchema);
