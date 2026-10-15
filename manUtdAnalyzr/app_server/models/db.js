//mongo code goes here for connection
const mongoose = require('mongoose');
//const dbURI = "mongodb://serumaelisha_db_user:Juwajuwa19@ac-fptazbo-shard-00-00.94anebm.mongodb.net:27017,ac-fptazbo-shard-00-01.94anebm.mongodb.net:27017,ac-fptazbo-shard-00-02.94anebm.mongodb.net:27017/Loc8r?tls=true&replicaSet=atlas-814sb7-shard-0&authSource=admin&retryWrites=true&w=majority";
const dbURI = "mongodb+srv://serumaelisha_db_user:NfO6FwwC1CwZHsXm@cluster0.6bybchs.mongodb.net/manUtdAnalyzr?appName=Cluster0"
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