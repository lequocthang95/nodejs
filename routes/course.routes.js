const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController')

router.get('/creates',courseController.create);
router.get('/store',courseController.store);
router.post('/savedata',courseController.savedata);
router.get('/:id/edit',courseController.edit);
router.put('/:id',courseController.update);
router.delete('/hidden/:id',courseController.hidden);
router.get('/trashbin',courseController.trashbin);
router.get('/:id/restore',courseController.restore);
router.delete('/delete/:id',courseController.delete);
router.post('/actionhidden',courseController.actionHidden);
router.post('/actiondelete',courseController.actionDelete);
router.post('/actionrestore',courseController.actionRestore);
router.get('/:slug',courseController.show);

module.exports = router;