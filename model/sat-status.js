'use strict';

module.exports = () => {
    var db = require('../repository/connect-db')();
    var Schema = require('mongoose').Schema;

    var SatStatusSchema = new Schema({
        numeroSessao: String,
        codigoDeRetorno: String,
        mensagemDeRetorno: String,
        codigoMensagemSefaz: String,
        mensagemDaSefaz: String,
        numeroDeSerie: String,
        tipoDaLan: String,
        ip: String,
        mascaraDeRede: String,
        gateway: String,
        dnsPrimario: String,
        dnsSecundario: String,
        statusDaLan: String,
        nivelDaBateria: String,
        totalDeMemoria: String,
        memoriaUtilizada: String,
        dataHoraAtual: String,
        versaoSoftwareBasico: String,
        versaoLayout: String,
        ultimoCFeEnviado: String,
        primeiroCFeArmazenado: String,
        ultimoCFeArmazenado: String,
        ultimaTransmissaoDeCFe: String,
        ultimaComunicacaoComSefaz: String,
        emissaoDoCertificado: String,
        vencimentoDoCertificado: String,
        estadoDeOperacao: String
    });

    return db.model('sat_status', SatStatusSchema);
}