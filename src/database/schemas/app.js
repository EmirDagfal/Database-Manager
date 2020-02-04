'use strict'

// Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Definimos el esquema
const resourceSchema = new mongoose.Schema({
    _id: ObjectId,
    name: {
        type: String,
        unique: true,
        required: true,
    },
    version: {
        type: String,
        maxlength: 20,
    },
    description: {
        type: String,
        maxlength: 140
    } // maximo 140 caracteres
})

// Definimos el modelo
const resourceModel = mongoose.model('Apps', resourceSchema)

module.exports = resourceModel;