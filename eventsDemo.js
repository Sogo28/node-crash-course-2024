import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetEventHandler(name) {
  console.log("Hello! " + name);
}

function byeEventHandler(name) {
  console.log("Bye! " + name);
}

// Enregistrer les évènements : 
myEmitter.on('greet', greetEventHandler);
myEmitter.on('bye', byeEventHandler);
myEmitter.on('error', (err) => {
  console.log('An Error Occured: ', err);
})

myEmitter.emit('greet', 'Daniel');
myEmitter.emit('bye', 'Daniel');
myEmitter.emit('error', new Error('Something went wrong...'));