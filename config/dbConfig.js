// require('dotnev').config();
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);