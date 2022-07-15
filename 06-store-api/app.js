

const express=require('express');
const app=express();
const port=8080;


//middleware
app.use(express.json())

//routes

app.get('/',(req,res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">Product</a>')
})

app.listen(port,()=>{
    console.log(`listening to the port number ${port}`);
});