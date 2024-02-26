const {
    getTasks,
    getTaskById,
    insertTask,
    updateTaskById,
    deleteTaskById,
} = require ("../models/taskModel.js")  

//show all tasks
const  showTasks = (req,res) => {
    getTasks((err,results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

//show a single task
const showTaskById=(req,res)=> {
    getTaskById(req.params.id,(err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

//add new task
const createTask = (req,res) => {
    const data = req.body;
    insertTask(data, (err,results)=> {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    });
}

//update the task
const updateTask = (req,res) => {
    const data = req.body;
    const id = req.params.id;
    updateTaskById(data, id, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

//delete task
const deleteTask = (req,res) => {
    const id = req.params.id;
    deleteTaskById(id, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}


module.exports = {
    showTasks, 
    showTaskById, 
    createTask, 
    deleteTask, 
    updateTask
  }