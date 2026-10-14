const mongoose = require('mongoose');
const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    role: {
        type: String,
        required
    },
    flag: String,
    photo: String
});

const playerSchema = new mongoose.Schema({
    name: Int32

})


const reviewSchema = new mongoose.Schema({
author: String,
rating: {
type: Number,
required: true,
min: 0,
max: 5
},
reviewText: String,
createdOn: {
type: Date,
'default': Date.now
}
});
const locationSchema = new mongoose.Schema({
name: {type: String, required: true},
address: String,
rating: {type: Number, "default": 0, min: 0, max: 5},
facilities: [String],
coords: {type: [Number], index: '2dsphere'},
openingTimes: [openingTimeSchema],
reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);