'use strict';

var model = require('../model/printer-status')();

module.exports = {
    getStatus() {
        return new Promise((resolve, reject) => {
            model.find(null, (err, printer_status) => {
                if (err) {
                    throw err;
                }

                console.log('Get Printer Status: ' + JSON.stringify(printer_status));

                if (printer_status.length) resolve(printer_status[0])
                else resolve()
            })
        });
    },

    saveStatus(status) {
        console.log('Conteudo para salvar: ' + JSON.stringify(status));

        return new Promise((resolve, reject) => {
            this.getStatus().then(result => {
                if (result) {
                    model.update(status, (err, res) => {
                        if (err) {
                            throw err;
                        }
                        console.log('Update com sucesso do Printer Status!')

                        resolve({status: "Salvo com sucesso!"});
                    });
                } else {
                    model.create(status, (err, res) => {
                        if (err) {
                            throw err;
                        }
                        console.log('Printer Status salvo com sucesso!');

                        resolve(res);
                    });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }
}