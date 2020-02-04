'use strict'

// Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Definimos el esquema
const resourceSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        required: true,
    },   // unico
    zones: [{
        type: Schema.Types.ObjectId, 
        ref: 'Zone',
        required: true,
    }],
})

// Definimos el modelo
const resourceModel = mongoose.model('Zone_Groups', resourceSchema)

module.exports = resourceModel;