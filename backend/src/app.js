const express = require('express');
const database = require('./database');
const userRoutes = require('./routes/usuario');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')
require('dotenv').config();


const PORT = process.env.PORT || 3050;

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(rep,res)=>{
    res.send('welcome API');
});

app.use('/api/users',userRoutes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));