import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _asientos from  "./asientos.js";
import _asientosreservados from  "./asientosreservados.js";
import _clientes from  "./clientes.js";
import _funciones from  "./funciones.js";
import _peliculas from  "./peliculas.js";
import _reservaciones from  "./reservaciones.js";
import _salas from  "./salas.js";

export default function initModels(sequelize) {
  const asientos = _asientos.init(sequelize, DataTypes);
  const asientosreservados = _asientosreservados.init(sequelize, DataTypes);
  const clientes = _clientes.init(sequelize, DataTypes);
  const funciones = _funciones.init(sequelize, DataTypes);
  const peliculas = _peliculas.init(sequelize, DataTypes);
  const reservaciones = _reservaciones.init(sequelize, DataTypes);
  const salas = _salas.init(sequelize, DataTypes);

  asientosreservados.belongsTo(asientos, { as: "asiento", foreignKey: "asiento_id"});
  asientos.hasMany(asientosreservados, { as: "asientosreservados", foreignKey: "asiento_id"});
  reservaciones.belongsTo(clientes, { as: "cliente", foreignKey: "cliente_id"});
  clientes.hasMany(reservaciones, { as: "reservaciones", foreignKey: "cliente_id"});
  reservaciones.belongsTo(funciones, { as: "funcion", foreignKey: "funcion_id"});
  funciones.hasMany(reservaciones, { as: "reservaciones", foreignKey: "funcion_id"});
  funciones.belongsTo(peliculas, { as: "pelicula", foreignKey: "pelicula_id"});
  peliculas.hasMany(funciones, { as: "funciones", foreignKey: "pelicula_id"});
  asientosreservados.belongsTo(reservaciones, { as: "reservacion", foreignKey: "reservacion_id"});
  reservaciones.hasMany(asientosreservados, { as: "asientosreservados", foreignKey: "reservacion_id"});
  asientos.belongsTo(salas, { as: "sala", foreignKey: "sala_id"});
  salas.hasMany(asientos, { as: "asientos", foreignKey: "sala_id"});
  funciones.belongsTo(salas, { as: "sala", foreignKey: "sala_id"});
  salas.hasMany(funciones, { as: "funciones", foreignKey: "sala_id"});

  return {
    asientos,
    asientosreservados,
    clientes,
    funciones,
    peliculas,
    reservaciones,
    salas,
  };
}
