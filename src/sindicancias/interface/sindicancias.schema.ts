import currentDate from '@nestjs/common'
const mongoose = require("mongoose");
const Schema = mongoose.Schema

export const SindicanciaSchema =  new Schema({
    det_matricula:{
        type: Number,
        require:true
    },

    pid:{
        type: Number,
        require:true
    },

    numero_comunicado:{
        type: Number,
        require:true
    },

    portaria:{
        type: Number,
        require:true
    },

    despacho:{
        type: Number,
        require:true
    },

    oficio:{
        type: Number,
        require:true
    },

    data_fatos:{
        type: Date,
        require:true
    },	

    data_instauracacao:{
        type: Date,
        require:true
    },

    mes:{
        type: Date,
        require:true
    },

    ano:{
        type: Date,
        require:true
    },

    assunto:{
        type: String,
        require:true
    },

    descricao:{
        type: String,
        require:true
    },

    numero_processo: {
        type: Number,
        require:true
    },

    demarca_processo: {
        type: String,
        require:true
    },

    local_demarca:{
        type: String,
        require:true
    },

    citacao_data: {
        type: Date,
        require:true
    },

    citacao_hora:{
        type: String,
        require:true
    },

    intimacao_data: {
        type: Date,
        require:true
    },

    intimacao_hora:{
        type: String,
        require:true
    },	

    artigo_inciso_resolucao: {
        type: String,
        require:true
    },

    autoridade_apurada:{
        type: String,
        require:true
    },

    rg_autoridade:{
        type: String,
        require:true
    },

    abreviacao_apurador: {
        type: String,
        require:true
    },

    secretario:{
        type: String,
        require:true
    },

    rg_secretario: {
        type: String,
        require:true
    },

    nome_diretor:{
        type: String,
        require:true
    },

    titulo_diretor:{
        type: String,
        require:true
    },
    	 	
    raio_cela: {
        type: Number,
        require: true
    },

    despacho_decisorio:{
        type: String,
        require:true
    },

    inicio_rcd_20dias: {
        type: Date,
        require: true
    },

    saida_rcd_20dias: {
        type: Date,
        require:true
    },

    saida_rcd_10dias:{
        type: Date,
        require:true
    },

    det_nome:{
        type: String,
        require: true
    },
    
    rg:{
        type: Number,
        require:true
    },
    
    det_mae:{
        type: String,
        require: true
    },
    
    det_nascimento: {
        type: Date,
        require: true
    },
    
    det_pai: {
        type: String,
        require: true
    },
    
    escolaridade: {
        type: String,
        require: true
    },
    
    inc_procedencia: {
        type: String,
        require: true
    },
    
    natureza_prisao: {
        type: String,
        require: true
    },
    
    inc_artigo: {
        type: String,
        require: true
    },
    
    inc_raio: {
        type: Number,
        require: true
    },
    
    etinia :{
        type: String,
        require:true
    },
    
    inc_bo: {
        type: String,
        require: true
    },
    
    det_execução: {
        type: String,
        require: true
    },
    
    cpf: {
        type: String,
        require:true
    },

    createdAt: {
        type: Date,
        require:true,
        default: currentDate
    },

    updatedAt: {
        type: Date,
        require: true,
        default: currentDate
    }
}, {timestamps:true, collection: 'sindicancia'})