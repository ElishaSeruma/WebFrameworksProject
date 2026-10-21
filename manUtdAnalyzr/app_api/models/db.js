require('dotenv').config();
const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

const dbURI = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/manUtdAnalyzr?appName=Cluster0`;

try {
    mongoose.connect(
    dbURI).then(
    () => {console.log(" Mongoose is connected")},
    err=> {console.log(err)}
        );
    }
catch (e) {

console.log("could not connect");
}

require('./staff');
require('./players');
require('./users');
