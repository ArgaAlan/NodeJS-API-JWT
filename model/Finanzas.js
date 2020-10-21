const mongoose = require('mongoose');

const finazasSchema = new mongoose.Schema({
    operacion: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date
    },
    noPagos: {
        type: Number
    },
    peridiocidad: {
        type: String,
        max: 100
    },
    referencia: {
        type: String,
        max: 50
    },
    dePara: {
        type: String,
        max: 100
    },
    descripcion: {
        type: String,
        max: 255
    },
    persona: {
        type: String,
        max: 100
    },
    promotor: {
        type: String,
        max: 100
    },
    tfiva: {
        type: String,
        max: 50
    },
    iva: {
        type: Number
    },
    tfseguro: {
        type: String,
        max: 50
    },
    compania: {
        type: String,
        max: 50
    },
    prima: {
        type: Number
    },
    fpago: {
        type: Number
    },
    poliza: {
        type: String,
        max: 100
    },
    tfSegFin: {
        type: String,
        max: 100
    },
    vigInicio: {
        type: String,
        max: 100
    },
    vigFinal: {
        type: String,
        max: 100
    },
    tipoUnidad: {
        type: String,
        max: 100
    },
    fechaPago: {
        type: Date,
    },
    relPago: {
        type: String,
        max: 100
    },
    siniestros: {
        type: String,
        max: 100
    },
    cantPolizas: {
        type: String,
        max: 100
    },
    sigVenc: {
        type: String,
        max: 100
    },
    vAsegurado: {
        type: String,
        max: 100
    },
    tipo: {
        type: String,
        max: 100
    },
    marca: {
        type: String,
        max: 100
    },
    serie: {
        type: String,
        max: 100
    },
    modelo: {
        type: String,
        max: 100
    },
    factura: {
        type: String,
        max: 100
    },
    version: {
        type: String,
        max: 100
    },
    motor: {
        type: String,
        max: 100
    },
    lote: {
        type: String,
        max: 100
    },
    comision: {
        type: String,
        max: 100
    },
    importe: {
        type: String,
        max: 100
    },
    producto: {
        type: String,
        max: 100
    },
    fondeador: {
        type: String,
        max: 100
    },
    valorOperacion: {
        type: Number
    },
    tipoFin: {
        type: Number
    },
    anticipo: {
        type: Number
    },
    seguroDeuda: {
        type: Number
    },
    apertura: {
        type: Number
    },
    deposito: {
        type: Number
    },
    admon: {
        type: Number
    },
    gps: {
        type: Number
    },
    seguroAuto: {
        type: Number
    },
    vRescate: {
        type: Number
    },
    descuento: {
        type: Number
    },
    chequera: {
        type: String,
        max: 100
    },
    ctroCosto: {
        type: String,
        max: 100
    },
    folio: {
        type: String,
        max: 100
    },
    lineaVta: {
        type: String,
        max: 100
    },
    comentarios: {
        type: String,
        max: 255
    },
    estatus: {
        type: String,
        max: 100
    },
    cancelado: {
        type: String,
        max: 100
    },
    idCliente: {
        type: String,
        max: 100
    },
    ffzc: {
        type: String,
        max: 100
    },
    ffzi: {
        type: String,
        max: 100
    },
    ffzg: {
        type: String,
        max: 100
    },
    ffza: {
        type: String,
        max: 100
    },
    empresa: {
        type: String,
        max: 100
    },
    lineaVenta: {
        type: String,
        max: 100
    },
    aplicaPagos: {
        type: String,
        max: 100
    },
    fFondeo: {
        type: Date
    }
});

module.exports = mongoose.model('Finanzas', finazasSchema);