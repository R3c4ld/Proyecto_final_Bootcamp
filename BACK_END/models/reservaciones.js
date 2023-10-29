import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class reservaciones extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    funcion_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'funciones',
        key: 'id'
      }
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'reservaciones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "reservaciones_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
