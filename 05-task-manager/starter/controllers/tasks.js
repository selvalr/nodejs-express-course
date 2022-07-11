const Task = require('../models/model')

const getAllItems = async(req, res) => {
    try {
        const task1=await Task.find({})
       res.status(201).json({task1}) 
            //(OR)
      // res.status(200).json({task1,amount:task1.length})
      //res.status(200).json({status:'success',data:{task1,nbHits:task1.length}})
    } catch (err) {
        res.status(500).json({msg:err})
    }
   // res.send('all')
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)

        res.status(201).json({ task })
       // res.json(req.body)
    } catch (err) {
        res.status(500).json({msg:err})
    }
   
}

const getTask = async(req, res) => {
   try {
    const {id:taskID}=req.params
    const task=await Task.findOne({_id:taskID});
    if(!task){
        return res.status(404).json({msg:`no task with id: ${taskID}`})
    }

    res.status(200).json({task})
   } catch (error) {
    res.status(500).json({msg:error})
   }
    //res.json({ id: req.params.id })
}
const updateTask = async(req, res) => {
    try {
        const {id:taskID}=req.params;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true,})
        if(!task){
            res.status(404).json({msg:`no task id ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
   // res.send("update")
}
const deleteTask = async (req, res) => {
    try {
        const {id:taskID}=req.params;
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(200).json({task})
       // res.status(200).json({task:null})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
   // res.send("delete")
}
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