'use strict';

const PrinterStatus = require('./controller/printer-status')
const SatStatus = require('./controller/sat-status')
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h2>Servidor funcionando!</h2>');
});

app.get('/printerStatus', (req, res, next) => {
    PrinterStatus.getStatus().then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send();
        }
    }).catch(err => {
        console.log('Falha ao procurar Printer Status');
        res.status(500).json({
            success: false,
            error: 'Falha ao procurar Printer Status',
            details: err.message
        });
    });
});

app.post('/printerStatus', (req, res, next) => {
    const status = req.body;

    PrinterStatus.saveStatus(status).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send();
        }
    }).catch(err => {
        console.log('Falha ao salvar Printer Status');
        res.status(500).json({
            success: false,
            error: 'Falha ao salvar Printer Status',
            details: err.message
        });
    })
});

app.get('/satStatus', (req, res, next) => {

    SatStatus.getStatus().then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send();
        }
    }).catch(err => {
        console.log('Falha ao procurar SAT Status');
        res.status(500).json({
            success: false,
            error: 'Falha ao procurar SAT Status',
            details: err.message
        });
    });
});

app.post('/satStatus', (req, res, next) => {
    const status = req.body;

    SatStatus.saveStatus(status).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send();
        }
    }).catch(err => {
        console.log('Falha ao salvar SAT Status');
        res.status(500).json({
            success: false,
            error: 'Falha ao salvar SAT Status',
            details: err.message
        });
    })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});