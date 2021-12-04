const mongoose = require('mongoose');
const notifSchema = require('../models/notificationSchema')


exports.getNotifs = async (req, res) => {
    await notifSchema.create({ full: req.body.fullUrl });
    res.redirect('/');
}
