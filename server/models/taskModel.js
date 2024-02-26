const db = require ("../config/database");

//get all task
const getTasks=(result)=>{
    db.query("SELECT * FROM task", (err,results)=> {
        if(err){
            console.log(err);
            result(err,null)
        }else{
            result(null,results)
        }
    });
};

//get single task
const getTaskById=(id,result)=>{
    db.query("SELECT * FROM TASK WHERE task_id =?",
    [id],
     (err,results)=> {
        if(err){
            console.log(err);
            result(err,null)
        }else{
            result(null,results[0])
        }
    });
};


//post task to db
const insertTask=(data,result)=>{
    db.query("INSERT INTO task SET?", [data], (err,results)=> {
        if(err){
            console.log(err);
            result(err,null)
        }else{
            result(null,results)
        }
    });
}

//update task 
const updateTaskById = (data, id, result) => {
    db.query("UPDATE task SET task_name = ?, task_status = ? WHERE task_id = ?", [data.task_name, data.task_status, id], (err,results) => {
        if(err){
            console.log(err);
            result(err,null);
        } else {
            result(null,results);
        }
    });
}

//Delete task 
const deleteTaskById = (id,result) => {
    db.query("DELETE FROM task WHERE task_id = ?", [id], (err,results) => {
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results);
        }
    });
}


module.exports = {
    getTasks, 
    getTaskById, 
    insertTask, 
    deleteTaskById, 
    updateTaskById
  }

