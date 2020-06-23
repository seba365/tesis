const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema ({

    descripcion:{
        type: String,
        required :true,
        trim: true
    },

    precio : {
        type: Number,
        required :true,
        trim: true
    }
})
const TipoServicio = mongoose.model('TipoServicio',servicioSchema);
export {TipoServicio};