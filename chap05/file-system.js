const fs = require('fs');
const { formatWithOptions } = require('util');
const data = 'write file';

// Asynchronous : 비동기
fs.readFile('./sample/text.txt', 'utf8', (err, data) => {
  if(err) {
    throw err;
  }

  console.log(data);
});

// Synchronous: 동기
const text = fs.readFileSync('./sample/text.txt', 'utf8');
console.log(text);

const asyncData = 'asyncData';
fs.writeFile('./sample/text_w1.txt', asyncData, 'utf8', (err) => {
  if(err) { throw err; }

  console.log('Asynchronous write file');
});

const syncData = 'syncData';
fs.writeFileSync('./sample/text_w2.txt', syncData, 'utf8', (err) => {
  if(err) throw err;

  console.log('Synchronous write file');
});