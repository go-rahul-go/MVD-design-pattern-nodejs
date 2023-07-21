const mongoose = require("mongoose");

const url="mongodb://127.0.0.1:27017/e-store";


let _schema = mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    os:String
})

async function dbConnector(){
    await mongoose.connect(url);
    return mongoose.model("mobiles",_schema);
    
}

module.exports = dbConnector;