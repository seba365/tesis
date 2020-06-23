import { gql } from 'apollo-server';

const typeDefs= gql`
    type Cliente {
        id: ID
        dni: String!
        nombre: String!
        apellido: String!
        email: String!
        telefono: String!
        turno: [Turnos]
    }

    type Turnos{
        id: ID
        fecha: String!
        hora: String!
        servicio: TipoServicio
        profesional: Profesional
        precio: Float!
    }

    type Profesional{
        id: ID
        dni: String!
        nombre: String!
        apellido: String!
        email: String!
        telefono: String!
        matricula: String!
        nombrelocal: String!
        direccionlocal: String!
        rubro:Rubro!
    }

    type TipoServicio{
        id: ID
        descripcion: String!
        precio: Float!
       
    }

    type Rubro{
        id: ID
        descripcion: String!
        tiposervicio:[TipoServicio]!
    }
    
    type Usuario{
        id: ID
        dni: String!
        nombre: String!
        apellido: String!
        email: String!
        telefono: String!
        matricula: String!
        nombrelocal: String!
        direccionlocal: String!
    }
    
    input UsuarioInput{
        dni: String!
        nombre: String!
        apellido: String!
        email: String!
        telefono: String!
        matricula: String!
        nombrelocal: String!
        direccionlocal: String!
        password: String!
    }

    input TipoServicioInput {
        descripcion: String!
        precio: Float! 
    }

    input TurnosArregloInput{
        id:ID,
        descripcion: String
    }
    input ClienteInput{
       id: ID
       dni: String!
       nombre: String!
       apellido: String!
       email: String!
       telefono: String!
       turno: [TurnosArregloInput]
    }

    type QueryAll{
        obtenerClientes: [Cliente]
        obtenerCliente: Cliente
        obtenerProfesionales: [Profesional]
        obtenerProfesional: Profesional
        obtenerTurnos: [Turnos]
        obtenerTurno: Turnos
        obtenerTipoServicios: [TipoServicio]
        obtenerTipoServicio: TipoServicio
        obtenerRubros: [Rubro]
        obtenerRubro: [Rubro]
    }

    
    type MutationAll{
        nuevoUsuario(input:UsuarioInput):Usuario
        nuevoTipoServicio(input:TipoServicioInput):TipoServicio
        nuevoCliente(input:ClienteInput):Cliente
    }

    schema{
        query:QueryAll
        mutation: MutationAll 
    }
`;

module.exports=typeDefs