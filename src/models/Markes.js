const Sequelize = require('sequelize');
const sequelize = require('../database/connection');


const Markes = sequelize.define('markes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    marke: Sequelize.TEXT,
    status: Sequelize.TEXT,
    date_register: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Markes.sync({force: true}).then(function () {
    // Table created
    return Markes.create({
        marke: "00:15.00", 
        status: "1", 
        date_register: "25/02/2022"
    });
});

module.exports = Markes;