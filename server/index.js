const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
require('dotenv').config();
const { MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER } = require('./config/config');

app.use(express.json());
// const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/blog`;

const mongoURI = "mongodb+srv://erankitkush:V1SpHDmsc3zsdxC0@cluster0.xkelt.mongodb.net/app"

const connectWithRetry = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => {
      console.error(err);
      setTimeout(connectWithRetry, 30000)
    });
}
connectWithRetry();

app.use("/api/blogs", require("./routes/blogs"))
app.use("/api/auth", require("./routes/auth"))

app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});
