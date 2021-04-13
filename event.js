const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {

    console.log('Todays lunchy wunchy: 🍣,🍔, and 🍟')
})

eventEmitter.emit('lunch');