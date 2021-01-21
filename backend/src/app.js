const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

app.use(require('./routes/usuario'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));