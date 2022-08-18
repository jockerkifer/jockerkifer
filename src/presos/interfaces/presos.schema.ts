import currentDate from '@nestjs/common'
const mongoose = require("mongoose");
const Schema = mongoose.Schema

export const PresosSchema = new Schema({
    det_nome:{
        type: String,
        require: true
    },

    det_nomesocial:{
        type: String,
        require: true
    },

    det_matricula:{
        type: Number,
        require:true
    },

    det_digito:{
        type: Number,
        require: true
    },
    matricula_digito:{
        type: String,
        require:true
    },

    det_execucao: {
        type: String,
        require: true
    },

    det_execucao_tipo:{
        type: String,
        require: true
    },

    det_pai:{
        type: String,
        require:true
    },

    det_mae: {
        type: String,
        require:true
    },

    det_datanascimento:{
        type: Date,
        require:true
    },

    idade: {
        type: Number,
        require:true
    },

    inclusao_tipo:{
        type: String,
        require: true
    },

    inclusao_tipo_cor_fundo: {
        type: Number,
        require:true
    },
    
    inclusao_tipo_cor_fonte:{
        type: Number,
        require:true
    },

    inclusao_tipo_transito_comum: {
        type: String,
        require:true
    },

    inclusao_tipo_transito_provisor:{
        type: String,
        require:true
    },

    inclusao_tipo_transferencia: {
        type: String,
        require:true
    },

    inclusao_tipo_automatica:{
        type: String,
        require: true
    },

    inc_codigo: {
        type: Number,
        require: true
    },

    inc_inclusaotipo_id:{
        type: Number,
        require:true
    },

    inc_datainclusao:{
        type: Date,
        require: true
    },

    inc_procedencia:{
        type: String,
        require:true
    },

    inc_raio: {
        type: Number,
        require:true
    },

    inc_cela: {
        type: Number,
        require:true
    },

    localizacao: {
        type: String,
        require: true
    },

    rg: {
        type: Number,
        require:true
    },

    cpf:{
        type: String,
        require: true
    },

    ra_aluno: {
        type: String,
        require: true
    },

    cartao_sus: {
        type: String,
        require: true
    },

    titulo_eleitoral:{
        type: String,
        require: true
    },

    titulo_eleitoral_situacao: {
        type: String,
        require: true
    },

    det_certmilitar_reservista:{
        type: String,
        require: true
    },

    nacionalidade: {
        type: String,
        require: true
    },

    det_profissao:{
        type: String,
        require: true
    },

    escolaridade: {
        type: String,
        require: true
    },

    termo:{
        type: String,
        require: true
    },

    residencia_cidade: {
        type: String,
        require: true
    },

    procedencia_cidade: {
        type: String,
        require: true
    },

    inc_dataprisao: {
        type: Date,
        require: true
    },

    inc_artigo:{
        type: String,
        require: true
    },

    inc_bo:{
        type: String,
        require: true
    },

    autoridade: {
        type: String,
        require: true
    },

    autoridade_cidade:{
        type: String,
        require: true
    },

    inc_processo: {
        type: String,
        require: true
    },

    inc_vara:{
        type: String,
        require: true
    },
    
    inc_comarca:{
        type: String,
        require: true
    },

    exc_codigo:{
        type: Number,
        require: true
    },

    exc_exclusaotipo_id: {
        type: Number,
        require: true
    },

    exclusao_tipo:{
        type: String,
        require: true
    },

    exclusao_tipo_cor_fonte: {
        type: String,
        require: true
    },

    exclusao_tipo_transito_provisor:{
        type: String,
        require: true
    },

    exclusao_tipo_transferencia:{
        type: String,
        require: true
    },

    exclusao_tipo_liberdade:{
        type: String,
        require: true
    },

    exc_dataexclusao: {
        type: Date,
        require: true
    },

    exc_destino:{
        type: String,
        require: true
    },

    exclusao_cidade:{
        type: String,
        require: true
    },

    imposta_ano: {
        type: Number,
        require: true
    },

    imposta_mes: {
        type: Number,
        require: true
    },

    imposta_dia: {
        type: Number,
        require: true
    },

    local_atual:{
        type: String,
        require: true
    },

    regime_id:{
        type: String,
        require: true
    },

    reginme: {
        type: String,
        require: true
    },

    regime_cor: {
        type: Number,
        require: true
    },

    det_condenado: {
        type: String,
        require: true
    },

    data_deferido_sa: {
        type: String,
        require: true
    },

    det_sit_processual: {
        type: String,
        require: true
    },

    transito: {
        type: String,
        require: true
    },

    seguro: {
        type: String,
        require: true
    },

    disciplinar: {
        type: String,
        require: true
    },

    conduta: {
        type: String,
        require: true
    },

    inc_pedido_vaga: {
        type: String,
        require: true
    },

    inc_pedido_data: {
        type: Date,
        require: true
    } ,

    inc_pedido_destino_id: {
        type: Number,
        require: true
    },

    pedido_destino: {
        type: String,
        require: true
    },

    inc_pedido_obs:{
        type: String,
        require: true
    },

    det_pront_cimic: {
        type: String,
        require: true
    },

    det_pront_cimic_origem: {
        type: String,
        require: true
    },

    det_filhos: {
        type: String,
        require: true
    },

    etinia:{
        type: String,
        require: true
    },

    status: {
        type: Schema.Types.ObjectId,
        ref: 'Status'
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

},{timestamps: true , collection: 'presos'})