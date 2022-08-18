import currentDate from '@nestjs/common'
const mongoose = require("mongoose")
const Schema = mongoose.Schema

export const GruposSchema = new Schema({

    nome:{
        type: String,
        require: true
    },

    status:{
        type: Schema.Types.ObjectId,
        ref:'Status'
    },

    createdAt:{
        type: Date,
        require: true,
        default: currentDate
    },

    updatedAt:{
        type: Date,
        require: true,
        default: currentDate
    }
},{timestamps:true , collection:'grupos'})