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
        type: String,
        require: true,
    },
    checkInDate: {
        type: Date,
        default: Date.now,
    },
    checkOutDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('vacation', VacationSchema);