import currentDate from '@nestjs/common'
const mongoose = require("mongoose");
const Schema = mongoose.Schema

export const FuncionarioSchema = new Schema({
    nome_servidor:{
        type: String,
        require:true
    },

    nome_mae:{
        type: String,
        require:true
    },

    rg:{
        type: String,
        require:true
    },

    cpf:{
        type: String,
        require:true
    },

    rs:{
        type: Number,
        require:true
    },

    status:{
        type: Schema.Types.ObjectId,
        ref: 'Status'
    },
    
    cns:{
        type: String,
        require:true
    },

    data_nascimento:{
        type: Date,
        require:true
    },

    idade:{
        type: Number,
        require:true
    },

    genero:{
        type: String,
        require:true
    },

    municipio_residencia:{
        type: String,
        require:true
    },

    logradouro:{
        type: String,
        require:true
    },
    
    numero: {
        type: Number,
        require:true
    },

    bairro:{
        type: String,
        require:true
    },

    telefone:{
        type: String,
        require:true
    },
    
    email:{
        type: String,
        require:true
    },

    cargo_servidor:{
        type: String,
        require:true
    },

    grupo:{
        type: Schema.Types.ObjectId,
        ref: 'Grupos'
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

},{timestamps: true, collection: 'funcionarios'})