


//import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require("body-parser");
const cors=require('cors')


const app = express();
// const PORT = process.env.PORT || 8080;
const PORT = 8080;


const routes = require('./routes/api');

const MONGODB_URI = ""

mongoose.connect(MONGODB_URI || 'mongodb://localhost/market_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
    console.log('mongoooose is conecTEEEEEDD');
});


//Midleware
app.use(bodyParser.json());
app.use(cors());
//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes)

// if(process.env.NODE_ENV==='production'){
//     app.use(express.static('client/build'))
// }


app.listen(PORT, console.log(`Server is started at ${PORT}`))


