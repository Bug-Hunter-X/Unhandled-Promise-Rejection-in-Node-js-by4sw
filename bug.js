const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Unhandled promise rejection
//This error occurs when a promise is rejected but not handled using a .catch() block.
//Example:

const fs = require('fs').promises;
fs.readFile('./file.txt')
  .then(data => {
    console.log(data.toString());
  })
  .catch(error => {
    console.error('Error reading file:', error);
  });

//The above code will properly handle errors.  If the .catch() is removed you will get an unhandled promise rejection error.