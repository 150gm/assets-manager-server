const Mongoose = require("mongoose");

Mongoose.connect("mongodb://admin:1q2w3e4r@localhost:27017/admin");

const assetsSchema = new Mongoose.Schema({
    name: String,
    type: String,
    serial: String,
})

const AssetsModel = Mongoose.model("assets", assetsSchema);

module.exports =  {AssetsModel};
