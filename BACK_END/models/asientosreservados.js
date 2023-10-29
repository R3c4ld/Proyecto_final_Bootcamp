import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class asientosreservados extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reservacion_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'reservaciones',
        key: 'id'
      }
    },
    asiento_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'asientos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'asientosreservados',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asientosreservados_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
