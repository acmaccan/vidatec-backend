const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));

require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const dbConnection = require('./config/db');
dbConnection.dbConnection();

app.listen(port, () => {
  console.log(`CORS enabled. Server listen port ${port}`);
});
