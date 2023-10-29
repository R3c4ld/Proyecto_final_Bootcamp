import {Sequelize} from 'sequelize';

const conexion = new Sequelize(
    'cine', //Nombre de la base
    'postgres', //Usuario
    '1234', // Password
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

export default conexion;
//module.exports = conexion;