const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema ({


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
    turno: {
        type: Array,
        required :true
    }
});
// const Usuario = mongoose.model('Usuario',UsuariosSchema);
// export { Usuario };
// module.exports = mongoose.model('usuarios',usuariosSchema);
const Cliente = mongoose.model('cliente',clienteSchema);
export {Cliente};