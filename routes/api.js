const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer();

router.post('/', upload.single('file'), (req, res) => res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
}));

module.exports = router;
