const Markes = require('../models/Markes');

async function createMark(req, res) {
    const { marke } = req.body;

    try {
        const status = "1";
        const date_register = "25/02/2022";

        const obj = {
            marke: marke, 
            status: status, 
            date_register: date_register
        };
        const fields = {
            fields: ['marke', 'status', 'date_register']
        }

        console.log("obj ==>", obj);
        
        const newMark = await Markes.create(obj, fields);
        console.log("newMark ==> ", newMark);
        if (newMark) {
            res.json(newMark)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creando la marca",
            data: {}
        })
    }

}

async function getAllMark(req, res) {
    res.json({});
}

async function deleteMark(req, res) {
    res.json({});
}


module.exports = { getAllMark, createMark, deleteMark };