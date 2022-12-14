export class UpdateSindicanciasDto{
    det_matricula: number;	
    pid:number;	
    numero_comunicado:number;	
    portaria:number;	
    despacho:number;	
    oficio:number;	
    data_fatos:Date;	
    data_instauracacao:Date;	
    mes:Date;
    ano:Date;	
    assunto: string;	
    descricao:string; 	
    numero_processo: number;
    demarca_processo: string;	
    local_demarca:string	
    citacao_data:Date; 	
    citacao_hora:string;	
    intimacao_data:Date;	
    intimacao_hora:string;	
    artigo_inciso_resolucao: string; 	
    autoridade_apurada:string; 	
    rg_autoridade:string; 	
    abreviacao_apurador: string; 	
    secretario:string; 	
    rg_secretario: string; 	
    nome_diretor:string;	
    titulo_diretor:string; 	
    raio_cela: number;	
    despacho_decisorio:string; 	
    inicio_rcd_20dias: Date;
    saida_rcd_20dias:Date;
    saida_rcd_10dias:Date;
    presos:[string];
    createdAt: Date;
    updatedAt:Date

}
