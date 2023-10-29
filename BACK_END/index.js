import express from 'express'
import conexion from './config/database.js'
import rutas from './routes/routes.js'
import cors from 'cors'
const app = express()
import 'dotenv/config'

async function iniciarServidor(){
    try {
        await conexion.sync({force:false}) 
    } catch (error) {
        console.error("Error al sincronizar: "+ error)
        return;
    }

    app.use(cors());
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(rutas)
    app.listen(process.env.APP_PORT)

    console.log(`Escuchando en puerto http://localhost:${process.env.APP_PORT}`)
}

iniciarServidor()