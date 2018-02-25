const { join } = require('path');

const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

app.set('port', process.env.PORT);

app.get('/', (req, res) => res.sendFile(join(__dirname, 'index.html')));

app.post('/api', upload.single('file'), (req, res) => res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
}));

app.listen(app.get('port'), () => console.log(`/file-metadata listening on ${app.get('port')}`));
