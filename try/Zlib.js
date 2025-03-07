//Compress file

const Zlip =require('zlip');
const gzip = Zlip.createGzip();

const fs =require('fs');
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');
inp.pipe(gzip).pipe(out);

//decompressfile
const Zlip =require('zlip');
const  unzip = Zlip.createUnzip();

const fs =require('fs');
const inp = fs.createReadStream('input.txt.gz');
const out = fs.createWriteStream('input2.txt.');
inp.pipe(unzip).pipe(out);