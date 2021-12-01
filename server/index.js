const express = require('express');

const app = express();
const port = 3000;

const logRequests = (req, res, next) => {
  console.log(`Recieved a ${req.method} request to ${req.path}`);
  next();
}

app.use(logRequests);
app.use(express.static('client/dist'));

app.listen(port, () => {console.log(`Listening on port: ${port}`)});