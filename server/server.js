const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const config = require("./config");
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "static/build")))
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, 'static/build/index.html')))
app.get('/', (req, res) => res.json({success: true, data: [1, 2, 3, 4, 5]}));
// app.post('/postData', (req, res) => res.json({success: true, data: req.body}));

(async function start() {
    try {
        await mongoose.connect(config.DB, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(config.PORT, () => {
            console.log(`Connected on port ${config.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
})()
