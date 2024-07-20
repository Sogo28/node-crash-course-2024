import path from 'path';

const fileName = './dir1/dir2/file.txt';

// baseName 
console.log(path.basename(fileName));

// dirName 
console.log(path.dirname(fileName));

// extName 
console.log(path.extname(fileName));

// parse 
console.log(path.parse(fileName));