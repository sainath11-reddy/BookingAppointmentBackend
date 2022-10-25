const express = require('express');
const bookingController = require('../controllers/crud');
const router = express.Router();

router.get('/get-users', bookingController.getUsers)
router.post('/post-user',bookingController.postUser);
router.get('/delete/:bookingId',bookingController.deleteUser);

module.exports = router;