const Task = require('../models/task');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.render('taskList', { tasks });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.newTaskForm = (req, res) => {
    res.render('addTask');
};

exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.redirect('/tasks');
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.editTaskForm = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.render('editTask', { task });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateTask = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        // Convert 'completed' from 'on' to true/false
        req.body.completed = req.body.completed === 'on';

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        res.redirect('/tasks');
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
};





exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.redirect('/tasks');
    } catch (error) {
        res.status(500).send(error);
    }
};
