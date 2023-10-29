import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class asientos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fila: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sala_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'salas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'asientos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asientos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
