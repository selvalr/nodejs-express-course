// CommonJS,every file is module(by default)
//Module - Encapsulated Code (only share minimum)
const name=require('./04-names');
const sayHai=require('./05-util');
const person=require('./06-alternaive');
require('./07-mind-grenade');
console.log(person);

sayHai('selva')
sayHai(name.karthi)
sayHai(name.Bass)