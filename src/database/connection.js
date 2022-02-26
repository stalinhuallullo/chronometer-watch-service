const Sequelize = require('sequelize');
 
const sequelize = new Sequelize(
    'chronometer',//bd
    'postgres',//user
    'postgres',//pss
    {
        host:'localhost',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: false
    }
)
module.exports = sequelize;