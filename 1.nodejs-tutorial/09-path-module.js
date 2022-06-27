const path=require('path');
console.log(path.sep);
//home/inba/iniya
const filePath=path.join('/hsi','selva','manan');
console.log(filePath);
//last file is a base name in directorey
const base=path.basename(filePath);
console.log(base);

const absoulate=path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absoulate);