import { ApolloServer } from 'apollo-server' ;
import conectarDB from './config/db';
import  typeDefs from './graphql/schema';
import resolvers from './graphql/resolver';

//Conectar a la base de datos
conectarDB();

//Servidor
const server=new ApolloServer({ typeDefs , resolvers });


//Arrancar el servidor
server.listen({port: process.env.PORT || 9999 }).then(({url})=>{
    console.log(`Servidor en la URL ${url}`);
    
});