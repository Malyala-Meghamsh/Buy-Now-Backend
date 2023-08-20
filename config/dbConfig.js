// require('dotnev').config();
require('dotenv').config();
const mongoose = require('mongoose');
// console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    // console.log("Yass");
}).catch(err=>{
    console.log(err);
});