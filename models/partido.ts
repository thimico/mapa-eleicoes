import * as mongoose from 'mongoose';

const Schema = mongoose.Schema
const PartidoSchema = new mongoose.Schema({
  partido: String,
  candidato: String,
  resultado: [{
    UF: String,
    nome: String,
    votos: Number,
    porcentagem: Number,
    codarea: Number
  }],
});

const Partido = mongoose.model('Partido', PartidoSchema);

export default Partido;
