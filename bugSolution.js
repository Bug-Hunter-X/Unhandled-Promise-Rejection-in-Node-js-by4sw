const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Properly handle promise rejections
const fs = require('fs').promises;
fs.readFile('./file.txt')
  .then(data => {
    console.log(data.toString());
  })
  .catch(error => {
    console.error('Error reading file:', error);
  });