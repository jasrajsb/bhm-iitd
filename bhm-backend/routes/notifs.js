const express = require('express');

const { getNotifs } = require('../controllers/notifs')

const router = express.Router();

router.get('/', getNotifs);

module.exports = router;