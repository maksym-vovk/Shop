const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const config = require('./config');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static/build')));
app.use(productRoutes);
app.use(userRoutes);
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, 'static/build/index.html')))

const run = async () => {
  try {
    await mongoose.connect(config.DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(config.PORT, () => {
      console.log(`Connected on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
