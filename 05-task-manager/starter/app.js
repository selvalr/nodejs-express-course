const express=require('express');
const dotenv=require('dotenv');
const task=require('./routes/router');
const connectDB = require('./db/connect');
const path=require('path')

const mongoose = require('mongoose')
dotenv.config({ path: '.env' })

const app=express();
connectDB();
const port=3000;

//middleware
app.use(express.static('./public'))
app.use(express.json());
//routes
/*
app.get('/home',(req,res)=>{
    res.send("homed psge")
})
*/

app.use('/api/v1/tasks',task)


//app.get('/api/v1/tasks') -get all the task
//app.post('/api/v1/tasks') -create new task
//app.get('/api/v1/tasks/:id') -get single task
//app.patch('/api/v1/tasks/:id') -update  task
//app.delete('/api/v1/tasks/:id') -delete task


 app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    