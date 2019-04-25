const {AssetsModel} = require("../db/assetsdb");


exports.postAssets = async (req, h) => {
    try {
        let assets = new AssetsModel(req.payload);
        let result = await assets.save();
        return h.response(result);
    }catch (error) {
        return h.response(error).code(500);
    }
};

exports.getAllAssets = async  (req,h) => {
    try {
        let assets = await AssetsModel.find().exec();
        return h.response(assets);

    }catch(error) {
        return h.response(error).code(500);
    }
};

exports.getAssetsById = async (req,h) => {
    try {
        let asset = await AssetsModel.findById(req.params.id).exec();
        return h.response(asset);
    }catch (error) {
        return h.response(error).code(500);
    }
};

exports.putAssetsById = async (req,h) => {
    try {
        let result = await AssetsModel.findByIdAndUpdate(req.params.id, req.payload, {new:true} );
        return h.response(result);
    }catch (error) {
        return h.response(error).code(500);
    }
};

exports.deleteAssetsById = async (req,h) => {
    try {
        let result = await AssetsModel.findByIdAndDelete(req.params.id);
        return h.response(result);
    }catch (error) {
        return h.response(error).code(500);
    }
};
