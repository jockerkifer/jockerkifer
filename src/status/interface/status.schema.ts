import currentDate from '@nestjs/common'
const mongoose = require("mongoose");
const Schema = mongoose.Schema

export const StatusSchema = new Schema({

    nome: {
        type: String,
        require: true
    },

    createdAt: {
        type: Date,
        require: true,
        default: currentDate
    },

    updatedAt: {
        type: Date,
        require: true,
        default: currentDate
    }
}, {timestamps: true, collection: 'status'})