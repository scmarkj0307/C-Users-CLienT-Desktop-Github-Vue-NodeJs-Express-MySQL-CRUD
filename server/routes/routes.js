const express = require("express");

const {

    showTasks,
    showTaskById,
    createTask,
    updateTask,
    deleteTask,

}  = require ("../controllers/taskControllers.js")


const router = express.Router();


//get all tasks route
router.get("/tasks", showTasks);

//get a single task
router.get("/tasks/:id", showTaskById);

//create a task
router.post("/tasks", createTask);

//update the task
router.put("/tasks/:id", updateTask);

//delete a task
router.delete("/tasks/:id", deleteTask);

module.exports = router