import {Usuario} from '../models/Usuario';

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
    
    // const addUser = new Usuario({
    //     dni: input.dni,
    //     nombre: input.nombre,
    //     apellido: input.apellido,
    //     email: input.email,
    //     telefono: input.telefono,
    //     matricula: input.matricula,
    //     nombrelocal: input.nombrelocal,
    //     direccionlocal: input.direccionlocal
    // });
    //  addUser.id=addUser._id;

    // console.log(input);

    // return new Promise((resolve,object) => {
    //     addUser.save((error) =>{
    //         if(error) rejects(error)
    //         else resolve(addUser)
    //     })
    // });
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
                    direccionlocal: input.direccionlocal
                });
        
        console.log('const  addUser');
        const result = await addUser.save();
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