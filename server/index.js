const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 4000;
const cors = require('cors');
require('dotenv').config();
const { MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER } = require('./config/config');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://my-bloggs.web.app/',
  credentials: true,
}));

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
