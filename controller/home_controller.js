const db = require('../config/mongoose');
const Task = require('../models/task');



module.exports.home=function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log(err);
            return;
        }
        return res.render('todo',{
            title: "todo",
            TaskList:tasks
        })
    })
};


module.exports.newTask=function(req,res){
    
    Task.create({
        description : req.body.description,
        date : req.body.date,
        option : req.body.option,
        status : "upcoming"
    }, function(err,newTask){
        if(err){
            console.log(err)

        }
        console.log(newTask);
        return res.redirect('back');
    });
}

module.exports.completedTask = function(req,res){
    Task.findByIdAndUpdate({_id : req.query.id},
        {
            status : "completed"
        },function(err, outcome){
              if(err){
                  console.log(err);
              }
              return res.redirect('back');
        });
};

module.exports.deleteTask = function(req,res){
    Task.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log(err);
            }
            return res.redirect('back');
    });
};