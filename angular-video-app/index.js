const express = require('express');
const app = express();
const multer = require('multer');
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route to handle video uploads
app.post('/upload', upload.single('video'), (req, res) => {
    console.log('Video uploaded:', req.file);
    res.send('Video uploaded successfully');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
