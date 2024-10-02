const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
require('dotenv').config();
const { MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER } = require('./config/config');

app.use(express.json());
app.use(cookieParser());
app.use(cors());
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

app.use("/api/blog", require("./routes/blogs"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/user", require("./routes/user"));

app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});
