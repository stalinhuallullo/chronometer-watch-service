
var app = require('./app');

const Sequelize = require('sequelize');
const sequelize = require('./database/connection');

async function main(){
    try{
        sequelize.authenticate().then(() => {
            console.log('Connection established successfully.');
          }).catch(err => {
            console.error('Unable to connect to the database:', err);
          }).finally(() => {
            //sequelize.close();
          });

        await app.listen(3000);
        console.log('Servidor creado por el puerto 3000');

        //await sequelize.authenticate();
        //console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
  
}
 
main();