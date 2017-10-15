module.exports = () => {
    var db = require('../repository/connect-db')();
    var Schema = require('mongoose').Schema;

    var printer_status = Schema({
        erro: String,
        tampaAberta: String,
        poucoPapel: String,
        gavetaAberta: String,
        cabecaQuente: String,
        bufferCheio: String,
        onLine: String
    });

    return db.model('printer_status', printer_status);
}