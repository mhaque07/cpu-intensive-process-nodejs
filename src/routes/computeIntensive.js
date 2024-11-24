const { parentPort } = require('worker_threads');

parentPort.on('message', (msg) => {
    console.log('Message from parent:', msg);
  if (msg === 'start') {
    let sum = 0;
    for(let i = 0; i < 100000000; i++) {
      let number = Math.cos(i);
      sum = sum + number;
    }
    parentPort.postMessage(sum);
  }
});