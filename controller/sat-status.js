'use strict';

var model = require('../model/sat-status')();

module.exports = {
    getStatus() {
        return new Promise((resolve, reject) => {
            model.find(null, (err, sat_status) => {
                if (err) {
                    throw err;
                }

                console.log('Get SAT Status: ' + JSON.stringify(sat_status));

                if (sat_status.length) resolve(sat_status[0])
                else resolve();
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
                        console.log('Update com sucesso do SAT Status!')

                        resolve({status: "Salvo com sucesso!"});
                    });
                } else {
                    model.create(status, (err, res) => {
                        if (err) {
                            throw err;
                        }
                        console.log('SAT Status salvo com sucesso!');

                        resolve(res);
                    });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }
}