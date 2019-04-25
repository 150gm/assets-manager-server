const routehandler = require('../handlers/routehandler');
const Joi = require("joi");

exports.baseroutes = [
    {
        method: 'POST',
        path: '/api/v1/assets',
        options: {
            validate: {
                payload: {
                    type: Joi.string().min(3).required(),
                    name: Joi.string().min(3).required(),
                    project: Joi.string().min(3).required(),
                    serialNo: Joi.string().min(5).required(),
                    user: Joi.string().min(3).required(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi ?
                        h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                },
            }
        },
        handler: routehandler.postAssets,
    },
    {
        method: 'GET',
        path: '/api/v1/assets',
        handler: routehandler.getAllAssets,
    },
    {
        method: 'GET',
        path: '/api/v1/assets/{id}',
        handler: routehandler.getAssetsById,
    },
    {
        method: 'PUT',
        options: {
            validate: {
                payload: {
                    type: Joi.string().optional(),
                    name: Joi.string().optional(),
                    project: Joi.string().optional(),
                    serialNo: Joi.string().optional(),
                    user: Joi.string().optional(),
                    checkDate: Joi.date().optional(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi ?
                        h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                },
            }
        },
        path: '/api/v1/assets/{id}',
        handler: routehandler.putAssetsById,
    },
    {
        method: 'DELETE',
        path: '/api/v1/assets/{id}',
        handler: routehandler.deleteAssetsById,
    },

];
