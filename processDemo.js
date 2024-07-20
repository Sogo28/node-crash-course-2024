// arguments 
// console.log(process.argv);

// env 
// console.log(process.env);

// id
// console.log(process.pid);

// cwd : current working directory
// console.log(process.cwd());

// title 
// console.log(process.title);

// mem usage 
// console.log(process.memoryUsage());

// uptime 
// console.log(process.uptime());

// on exit 
process.on('exit', (code) => {
  console.log(`About to exit with code ${code}`)
})
// exit 
process.exit(0);

console.log('this will not be logged');