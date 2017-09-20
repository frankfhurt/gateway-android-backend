var PrinterStatus = require('./controller/printer-status')
var SatStatus = require('./controller/sat-status')

var express = require('express');
app = express();

app.get('/', (req, res) => {
    res.send('Ola Mundo');
});

app.get('/printerStatus', (req, res) => {
    res.status(200).json(PrinterStatus.getStatus());
});

app.get('/satStatus', (req, res) => {
    res.status(200).json(SatStatus.getStatus());
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});