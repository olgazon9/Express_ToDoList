const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getAllTasks);
router.post('/', tasksController.createTask);
router.get('/new', tasksController.newTaskForm);
router.get('/:id/edit', tasksController.editTaskForm);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;
