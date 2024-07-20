import fs from 'fs/promises';

// Reading 
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  }
  catch (err) {
    console.log(err);
  }
}

// Writing 
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello, this is what i\'ve written !');
    console.log("File appended to...");
  }
  catch (err) {
    console.log(err);
  }
}

// Appending 
const appendFile = async () => {
  try {
    console.log("Appending to the file...");
    await fs.appendFile('./test.txt', "\nHello, this is what i've appended to the file !");
  }
  catch (err) {
    console.log(err);
  }
}

writeFile();
appendFile();
readFile();