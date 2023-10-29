import modelosInit from '../models/init-models.js'
import conexion from '../config/database.js'


let modelos = modelosInit(conexion)

const holaMundo = async (req, res) => {
    res.status(200).json("Hola");
}



const insertarCliente = async (req, res) =>{
    const Clientes = modelos.clientes

    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const correo = req.body.correo
  
    const cliente = await Clientes.create({
        "nombre": nombre,
        "apellido": apellido,
        "correo": correo
    })
    res.json(cliente)
};

const obtenerClientes = async (req, res) =>{
    const Clientes = modelos.clientes
    const clientes = await Clientes.findAll()
    res.json(clientes)
}

const obtenerCliente = async (req, res) =>{
    const Clientes = modelos.clientes
    const id = req.params.id
    const clientes = await Clientes.findOne({
        where:{
            id:id
        }
    })
    res.json(clientes)
}

const actualizarCliente = async (req, res) =>{
    const Clientes = modelos.clientes
    const id = req.params.id

    const cliente = await Clientes.findOne({
        where:{
            id:id
        }
    })

    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const correo = req.body.correo

    cliente.nombre = nombre
    cliente.apellido = apellido
    cliente.correo = correo

    await cliente.save()

    res.json(cliente)
}
    
const borrarCliente = async (req, res) =>{
    const Clientes = modelos.clientes

    const id=req.params.id
    const cliente = await Clientes.destroy({
        where: {
            "id": id
        }
    })
    res.json({message:"Se ha eliminado el id "+id})
}

   

export {holaMundo,insertarCliente, actualizarCliente, borrarCliente, obtenerClientes,obtenerCliente }