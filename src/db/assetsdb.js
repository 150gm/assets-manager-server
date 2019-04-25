const Mongoose = require("mongoose");

Mongoose.connect("mongodb://admin:1q2w3e4r@localhost:27017/admin");

const assetsSchema = new Mongoose.Schema({
    type: String,
    name: String,
    project: String,
    serialNo: String,
    checkDate: {
        type:Date,
        default:Date.now
    },
    user: String,
})

const AssetsModel = Mongoose.model("assets", assetsSchema);

module.exports =  {AssetsModel};
