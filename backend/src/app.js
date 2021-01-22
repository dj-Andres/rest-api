const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(require('./routes/usuario'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));