const Router = require('express');
const router = new Router();
const MarkeCrud = require('../controllers/marker.controller');

router.post("/", MarkeCrud.createMark);
router.get("/", MarkeCrud.getAllMark);
router.delete('/all', MarkeCrud.deleteAllMark);
router.delete('/:id', MarkeCrud.deleteMark);


module.exports = router;