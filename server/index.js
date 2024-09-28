const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  console.log('GET request received');
  res.send('Hello World! jfkjdsf');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
