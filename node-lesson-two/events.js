const EventEmitter = require('events');

const myEmitter = new EventEmitter('MY_EVENT');

myEmitter.addListener('MY_EVENT', function(a,b) {
    console.log('Listnener 1', a, b);
});

myEmitter.addListener('MY_EVENT', function(a,b) {
    console.log('Listnener 2', a, b);
    try {
        throw 'Oops!';
    }
    catch(e) {
        myEmitter.emit('error', e);
    }
});

myEmitter.on('error', function() {
    console.log('The error has occured!');
});

myEmitter.emit('MY_EVENT', 'Hello', 'world 1!');
myEmitter.emit('MY_EVENT', 'Hello', 'world 2!');
myEmitter.emit('MY_EVENT', 'Hello', 'world 3!');

// myEmitter.removeListener();
// myEmitter.removeAllListeners();