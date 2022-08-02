// Importing our packages




const express = require('express');
const morgan = require('morgan');
const connectDB = require('./database/db');
const router = require('./routes/user.routes');
require('dotenv').config();



const server = express();
connectDB()

//middleware
server.use(morgan('dev'));
server.use(express.json());
server.use ('/api', router);

const port = process.env.PORT || 7895;

server.listen(port, () => {
    console.log(`Server up and running on port http://localhost:${port}`);
  });
