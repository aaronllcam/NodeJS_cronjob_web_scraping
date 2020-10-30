//creamos el schema:
//el modelo corresponidoene a una tabla  de nuestra base de datos no relacional!

import mongoose from 'mongoose';
const { Schema } = mongoose;

const breakingNewSchema = new Schema({
    title: String,
    link: String
})

const breakingNewModel = mongoose.model('BreakingNew', breakingNewSchema);

module.exports = breakingNewModel;


