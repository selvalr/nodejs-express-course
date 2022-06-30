const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    console.log('home');
    res.status(200).send('home');
});
app.get('/about',(req,res)=>{
    console.log('about');
    res.status(200).send('about');
});

app.all('*',(req,res)=>{
    console.log('error');
    res.status(404).send('not found');
});





app.listen(5000,()=>{
    console.log('serveris listenig port 5000');
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen