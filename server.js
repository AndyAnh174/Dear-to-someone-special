const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Thiết lập cơ sở dữ liệu SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS thoughts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL
        )`);
    }
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-thoughts', (req, res) => {
    const { thoughts } = req.body;
    if (thoughts) {
        db.run(`INSERT INTO thoughts (content) VALUES (?)`, [thoughts], function(err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ id: this.lastID });
        });
    } else {
        res.status(400).json({ error: 'No thoughts provided' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
