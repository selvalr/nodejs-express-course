// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmiter =require('events');

const customEmitter=new EventEmiter();


// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it


customEmitter.on('response',(name)=>{
    console.log(`hai ${name}`);
});
customEmitter.on('response1',(age)=>{
    console.log(`Age is ${age}`);
});
customEmitter.emit('response','selva');
customEmitter.emit('response1',24);