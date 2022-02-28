const Sequelize = require('sequelize');
 
const sequelize = new Sequelize(
    'chronometer',// DataBase
    'postgres',//   User
    'postgres',//   Password
    {
        host:'localhost',
        dialect: 'postgres',
        port: 5433,
        logging: false
    }
)
module.exports = sequelize;
