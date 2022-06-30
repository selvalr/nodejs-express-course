

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

const express=require("express");
const app=express();
console.log(app);


setInterval(()=>{
    console.log("hello selva");
},1000);