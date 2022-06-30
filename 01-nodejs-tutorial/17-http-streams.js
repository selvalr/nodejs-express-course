const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    //const tet=fs.readFileSync('./content/big.txt)
    //res.end(tet);
    const fileStream=fs.createReadStream('./content/big.txt');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
}).listen(3000);