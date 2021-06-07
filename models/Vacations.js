const mongoose = require('mongoose');

const VacationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vacations'
    },
    country: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    photos: {
        type: String,   // To be modified
        require: true,
    },
    location: {         // To be modified
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('vacation', VacationSchema);