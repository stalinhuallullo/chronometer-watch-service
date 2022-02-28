const Sequelize = require('sequelize');
const sequelize = require('../database/connection');


const Markes = sequelize.define('markes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    marke: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date_register: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
    }
}, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
});

/*Markes.sync({force: true}).then(function () {
    // Table created
    return Markes.create({
        marke: "00:15.00", 
        status: "1", 
        date_register: new Date()
    });
});*/

module.exports = Markes;