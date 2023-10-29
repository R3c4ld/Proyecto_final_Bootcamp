import {Router} from 'express'
import {holaMundo, insertarCliente, actualizarCliente,borrarCliente, obtenerCliente, obtenerClientes} from "../controllers/clientes.js"
const router = Router();


/*HOLA MUNDO*/
router.get('/',holaMundo)

/*CLIENTES*/
router.get('/clientes/:id', obtenerCliente)
router.get('/clientes', obtenerClientes)
router.post('/clientes', insertarCliente)
router.put('/clientes/:id', actualizarCliente)
router.delete('/clientes/:id', borrarCliente)

/**/



export default router;
