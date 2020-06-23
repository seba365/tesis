import {Usuario} from '../models/Usuario';
import {Cliente} from '../models/Cliente';
import {TipoServicio} from '../models/TipoServicio';

const resolvers = {
    QueryAll:{
        obtenerClientes : async () => {
          try {
              const Clientes =  await Clientes.find({});
              return Clientes
          } catch(error){
              console.log(error)
          }
},

obtenerCliente : async () => {
    try {
        const Cliente =  await Cliente.find({});
        return Cliente
    } catch(error){
        console.log(error)
    }
},
obtenerProfesionales : async () => {
    try {
        const Profesionales =  await Profesionales.find({});
        return Profesionales
    } catch(error){
        console.log(error)
    }
},

obtenerProfesional : async () => {
    try {
        const Profesional =  await Profesional.find({});
        return Profesional
    } catch(error){
        console.log(error)
    }
},

obtenerTurnos: async () => {
    try {
        const Turnos =  await Turnos.find({});
        return Turnos
    } catch(error){
        console.log(error)
    }
},

obtenerTurno: async () => {
    try {
        const Turno =  await Turno.find({});
        return Turno
    } catch(error){
        console.log(error)
    }
},

obtenerRubro: async () => {
    try {
        const Rubro =  await Rubro.find({});
        return Rubro
    } catch(error){
        console.log(error)
    }
},

obtenerRubros: async () => {
    try {
        const Rubros =  await Rubros.find({});
        return Rubros
    } catch(error){
        console.log(error)
    }
},

obtenerTipoServicios: async () => {
    try {
        const TipoServicios =  await TipoServicios.find({});
        return TipoServicios
    } catch(error){
        console.log(error)
    }
},

obtenerTipoServicio: async () => {
    try {
        const TipoServicio =  await TipoServicio.find({});
        return TipoServicio
    } catch(error){
        console.log(error)
    }
}
    },

MutationAll: {
nuevoUsuario : async(_, { input } ) => {
    console.log('addUser');
    try {
        console.log(input);
         console.log('pre const addUser');
            const addUser = new Usuario({
                    dni: input.dni,
                    nombre: input.nombre,
                    apellido: input.apellido,
                    email: input.email,
                    telefono: input.telefono,
                    matricula: input.matricula,
                    nombrelocal: input.nombrelocal,
                    direccionlocal: input.direccionlocal,
                    password: input.password
                });
        
        console.log('const  addUser');
        const result = await addUser.save();
        console.log('result');
        return  result;
    } catch (error) {
        console.log(error);
        
    }
},
nuevoTipoServicio : async(_, { input } ) => {
    console.log('addServicio');
    try {
        console.log(input);
         console.log('pre const addServicio');
            const addServicio = new TipoServicio({
                descripcion: input.descripcion,
                    precio: input.precio
                });
        
        console.log('const  addServicio');
        const result = await addServicio.save();
        console.log('result');
        return  result;
    } catch (error) {
        console.log(error);
        
    }
},

nuevoCliente : async(_, { input } ) => {
    console.log('addCliente');
    try {
        console.log(input);
         console.log('pre const addCliente');
            const addCliente = new Cliente({
                    dni: input.dni,
                    nombre: input.nombre,
                    apellido: input.apellido,
                    email: input.email,
                    telefono: input.telefono,
                    turno: input.turno
                });
        
        console.log('const  addCliente');
        const result = await addCliente.save();
        console.log('result');
        return  result;
    } catch (error) {
        console.log(error);
        
    }
}

}


}

 module.exports = resolvers;
// export default resolvers;