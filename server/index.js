const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 4000;
const cors = require('cors');
require('dotenv').config();
const { MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER } = require('./config/config');
const { job } = require('./cron');


const allowedOrigins = ['https://my-bloggers.web.app', 'http://localhost:5173', 'http://localhost:4173', 'https://my-bloggers.firebaseapp.com', 'http://192.168.1.59:5173'];

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

job.start();

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

app.use("/api/blog", require("./routes/blogs"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/comment", require("./routes/comment"));

app.listen(port,'192.168.1.59' , () => {
  console.log('Server is running on port', port);
});
