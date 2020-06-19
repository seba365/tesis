const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema ({


    dni: {
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    nombre: {
        type: String,
        required :true,
        trim: true
    },

    apellido : {
        type: String,
        required :true,
        trim: true
    },
    email :{
        type: String,
        required :true,
        trim: true,
        unique :true
    },
    telefono: {
        type: String,
        required :true,
        trim: true
    },
    matricula: {
        type: String,
        required :true,
        trim: true,
        unique :true
    },
    nombrelocal:{
        type: String,
        required :true,
        trim: true 
    },
    direccionlocal: {
        type: String,
        required :true,
        trim: true
    },
    password: {
        type: String,
        required :true,
        trim: true
    }
});
// const Usuario = mongoose.model('Usuario',UsuariosSchema);
// export { Usuario };
module.exports = mongoose.model('usuarios',usuariosSchema);