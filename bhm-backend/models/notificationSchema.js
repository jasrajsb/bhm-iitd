const { TooManyRequests } = require('http-errors');
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    notice: {
        type: String,
        required: true,
    },
    notifType: {
        type: ['popup', 'normal'],
        required: true,
        default: 'normal'
    },
    showHide: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Notifications', notificationSchema);