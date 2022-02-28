const Markes = require('../models/Markes');
const { formatDate } = require('../utils/functions');

async function createMark(req, res) {
    const { marke } = req.body;

    try {
        const obj = {
            marke: marke, 
            status: "1", 
            date_register: formatDate(new Date())
        };
        const fields = {
            fields: ['marke', 'status', 'date_register']
        }

        const newMark = await Markes.create(obj, fields);
        if (newMark) {
            res.json(newMark)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creando la marca",
            data: error
        })
    }

}

async function getAllMark(req, res) {
    const all = await Markes.findAll();
    res.json(all);
}

async function deleteMark(req, res) {
    var { id } = req.params;
    var rowCount = await Markes.destroy({
        where: {
            id
        }
    })
    res.json(rowCount);
}

async function deleteAllMark(req, res) {
    await Markes.destroy({
        where: {},
        truncate: true
      })
    res.json({
        data:"Se elimino con exito"
    });
}


module.exports = { getAllMark, createMark, deleteMark, deleteAllMark };