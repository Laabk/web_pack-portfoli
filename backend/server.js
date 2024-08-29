const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Hardcoded credentials
    const hardcodedEmail = "laabkdavid@@gmail.com";
    const hardcodedPassword = "0546407004david";

    if (email === hardcodedEmail) {
        if (password === hardcodedPassword) {
            res.json("Success");
        } else {
            res.json("Wrong password");
        }
    } else {
        res.json("No records found!");
    }
});

app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});
