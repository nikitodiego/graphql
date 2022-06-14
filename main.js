
import express from 'express'
import productosApiRouter from './routers/productos.js'
import carritosApiRouter from './routers/carritos.js'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema.js'
import { connect } from './database.js'

//Instancia servidor y API
const app = express()
//Conexión MongoDB
connect()

//Configuracion servidor
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//rutas del servidor API Rest
app.use('/api/productos', productosApiRouter)
app.use('/api/carritos', carritosApiRouter)

//graphql middleware
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(8080, () => console.log("Server on port 8080"))

