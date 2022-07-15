const Task = require('../models/model')
const asyncWrapper=require('../middleware/async')
const {createCustomError}=require('../errors/custom-error')
const getAllItems =asyncWrapper( async(req, res) => {

        const task1=await Task.find({})
       res.status(201).json({task1}) 
            //(OR)
      // res.status(200).json({task1,amount:task1.length})
     // res.status(200).json({status:'success',data:{task1,nbHits:task1.length}})
   
   // res.send('all')
})
const createTask =asyncWrapper( async (req, res) => {
   
        const task = await Task.create(req.body)

        res.status(201).json({ task })
       // res.json(req.body)
  
      
   
})

const getTask =asyncWrapper( async(req, res, next) => {
   
    const {id:taskID}=req.params
    const task=await Task.findOne({_id:taskID});
   
    if(!task){
        return next(createCustomError(`no task with id: ${taskID}`,404)) //(OR)
        /*
       const error=new Error('Not Found');
       error.status=404;
       return next(error)
*/
      //  return res.status(404).json({msg:`no task with id: ${taskID}`})
    }

    res.status(200).json({task})
  
    //res.json({ id: req.params.id })
})


const updateTask =asyncWrapper( async(req, res) => {
  
        const {id:taskID}=req.params;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true,})
        if(!task){
            return next(createCustomError(`no task with id: ${taskID}`,404)) //(OR)
        
            //res.status(404).json({msg:`no task id ${taskID}`})
        }
        res.status(200).json({task})
    
   // res.send("update")
})


const deleteTask =asyncWrapper( async (req, res) => {
    
        const {id:taskID}=req.params;
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return next(createCustomError(`no task with id: ${taskID}`,404)) //(OR)
        
            //return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).json({task})
       // res.status(200).json({task:null})
   
   // res.send("delete")
})

/*
const editTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true,overwrite:true})
        if(!task){
            res.status(404).json({msg:`no task id ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}
*/


module.exports = { getAllItems, createTask, getTask, updateTask, deleteTask}