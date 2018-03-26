const { join } = require('path');

const express = require('express');

const router = express.Router();
const viewsDir = join(__dirname, '..', 'views');

router.use(express.static(viewsDir));

module.exports = router;
