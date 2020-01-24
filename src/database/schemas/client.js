'use strict'

const Schema = require('mongoose').Schema;

const schemas = {
    clientSchema: new Schema({
        _id: Schema.Types.ObjectId,
        name: {type: String, unique: true},   // unico
        apps: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'App'
        }],
    })
};

module.exports = schemas;