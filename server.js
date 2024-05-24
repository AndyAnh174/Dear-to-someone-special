// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let opinion = ''; // Biến để lưu trữ ý kiến từ người dùng

app.use(bodyParser.json());

// Endpoint để nhận ý kiến từ frontend và lưu trữ nó
app.post('/api/opinion', (req, res) => {
    const { text } = req.body;
    opinion = text;
    res.status(200).send('Opinion received successfully!');
});

// Endpoint để trả về ý kiến đã lưu trữ cho frontend
app.get('/api/opinion', (req, res) => {
    res.status(200).json({ opinion });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
