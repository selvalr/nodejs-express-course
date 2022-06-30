//Build -in modules
//Os,Path,Fs,Http

const os=require('os');
//info about current user
const file=os.userInfo();

console.log(file);

// method return the system uptime in second
console.log(`The system uptime is ${os.uptime}`);


const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    osarch:os.arch(),
    osCpus:os.cpus(),

}
console.log(currentOs);