import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class funciones extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pelicula_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'peliculas',
        key: 'id'
      }
    },
    sala_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'salas',
        key: 'id'
      }
    },
    fechayhora: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'funciones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "funciones_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
