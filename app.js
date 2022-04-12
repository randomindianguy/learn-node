//import events module
const events = require('events');

//create an eventEmitter object
const EventEmitter = new events.EventEmitter(); //events.EventEmitter is basically the eventEmitter class.

//define connection event handler
const connectionHandler = () => {
    console.log('Connection Successful!');
    //fire data_received event
    EventEmitter.emit('dataReceived');
};

//bind connection event with event handler
EventEmitter.on('connectionMade', connectionHandler);

//bind data_received with the event handler
EventEmitter.on('dataReceived', () => {
    console.log('Data Received Successfully!');
});

//fire connection_made event
EventEmitter.emit('connectionMade');

//mark end of program
console.log('End of Program!');