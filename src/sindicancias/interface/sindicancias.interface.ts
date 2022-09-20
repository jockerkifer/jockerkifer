import { Document } from "mongoose";

export interface Sindicancias extends Document{
    det_matricula: Number;	
    pid:Number;	
    numero_comunicado:Number;	
    portaria:Number;	
    despacho:Number;	
    oficio:Number;	
    data_fatos:Date;	
    data_instauracacao:Date;	
    mes:Date;
    ano:Date;	
    assunto: String;	
    descricao:String; 	
    numero_processo: Number;
    demarca_processo: String;	
    local_demarca:String	
    citacao_data:Date; 	
    citacao_hora:String;	
    intimacao_data:Date;	
    intimacao_hora:String;	
    artigo_inciso_resolucao: String; 	
    autoridade_apurada:String; 	
    rg_autoridade:String; 	
    abreviacao_apurador: String; 	
    secretario:String; 	
    rg_secretario: String; 	
    nome_diretor:String;	
    titulo_diretor:String; 	
    raio_cela: Number;	
    despacho_decisorio:String; 	
    inicio_rcd_20dias: Date;
    saida_rcd_20dias:Date;
    saida_rcd_10dias:Date;
    det_nome:String;
    rg:Number;
    presos:[String];
    createdAt:Date;
    updatedAt: Date
}
    
