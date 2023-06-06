const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {  // Como primer parametro recibe al nombre de la tabla. 
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true // Tiene que tener formato email. 
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, // Como segundo parametro recibe a un objeto que es una tabla donde van a estar los atributos
   { timestamps: false }); // Esto para que se elimine las ultimas dos columnas de mi base de dato. 
};
