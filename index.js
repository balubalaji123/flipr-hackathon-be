const express = require('express')
const app = express()
const path = require('path')

const contact = require('./routes/contact');
const notification = require('./routes/notification');
const dashboard = require('./routes/dashboard');

const cors = require('cors');
app.use(cors());
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/contact', contact);
app.use('/notification', notification);
app.use('/dashboard', dashboard);
app.get('/', function (req, res) {
    res.send("welcome to app from balaji")
})
app.listen(process.env.PORT || 3000, () => {
    console.log(`serving website `);
})