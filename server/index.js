const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 4000;
const cors = require('cors');
require('dotenv').config();
const { MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER } = require('./config/config');


const allowedOrigins = ['https://my-bloggs.web.app', 'http://localhost:5173', 'http://localhost:4173', 'https://my-bloggs.firebaseapp.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

const connectWithRetry = () => {
  mongoose
    .connect(process.env.mongoURI)
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

app.listen(port, () => {
  console.log('Server is running on port', port);
});
