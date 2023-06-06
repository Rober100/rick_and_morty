const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER, // type es el tipo de dato
         allowNull: false,
         primaryKey: true
         // autoIncrement: true Para que aumente de a uno pero el readme no me pide asi que se lo sacamos
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM(`Alive`, `Dead`, `unknown`), // Lo que estamos dicienco con Enum es que el tipo de estado puede alive, dead o unknown. Permite restringir nuestra base de datos. 
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM(`Female`, `Male`, `Genderless`, `unknown`),
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      Image: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, 
   { timestamps: false });
};
