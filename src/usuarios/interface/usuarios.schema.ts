import currentDate from '@nestjs/common'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

export const UsuariosSchema = new Schema({
    nome:{
        type: String,
        require: true
    },

    email: {
        type: String,
        require:true,
        unique: true
    },

    password:{
        type: String,
        require:true
    },

    grupo:{
        type: Schema.Types.ObjectId,
        ref: 'Grupos'
    },

    status:{
        type: Schema.Types.ObjectId,
        ref: 'Status'
    },

    createdAt:{
        type: Date,
        require:true,
        default: currentDate
    },

    updatedAt:{
        type: Date,
        require:true,
        default: currentDate
    }
},{timestamps: true, collection: 'usuarios'})