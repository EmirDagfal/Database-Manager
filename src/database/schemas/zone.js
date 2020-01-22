'use strict'

const mongoose = require('..');
Schema = mongoose.Schema;

const schemas = {
    zoneSchema: new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {type: String, unique: true},   // unico
        geofence: [{ 
            lat: Number,
            lon: Number
        }],
    })
};

module.exports = schemas;