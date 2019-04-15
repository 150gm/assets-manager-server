const handler = require('../handlers/handlers');
const Joi = require("joi");

exports.baseroutes = [
    {
        method: 'POST',
        path: '/api/v1/assets',
        options: {
            validate: {
                payload: {
                    name: Joi.string().min(3).required(),
                    type: Joi.string().min(5).required(),
                    serial: Joi.string().min(5).required(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi ?
                        h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                },
            }
        },
        handler: handler.postAssets,
    },
    {
        method: 'GET',
        path: '/api/v1/assets',
        handler: handler.getAllAssets,
    },
    {
        method: 'GET',
        path: '/api/v1/assets/{id}',
        handler: handler.getAssetsById,
    },
    {
        method: 'PUT',
        options: {
            validate: {
                payload: {
                    name: Joi.string().optional(),
                    type: Joi.string().optional(),
                    serial: Joi.string().optional(),
                },
                failAction: (request, h, error) => {
                    return error.isJoi ?
                        h.response(error.details[0]).takeover()
                        : h.response(error).takeover();
                },
            }
        },
        path: '/api/v1/assets/{id}',
        handler: handler.getAssetsById,
    },
    {
        method: 'DELETE',
        path: '/api/v1/assets/{id}',
        handler: handler.getAssetsById,
    },

];
