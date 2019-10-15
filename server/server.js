const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const config = require('./config');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(productRoutes);
app.use(userRoutes);
app.use(orderRoutes);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')))
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')))

const run = async () => {
  try {
    await mongoose.connect(config.DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    app.listen(config.PORT, () => {
      console.log(`Connected on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
