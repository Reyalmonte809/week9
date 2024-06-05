const fs = require('node:fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  let cooked = JSON.parse(data)
  console.log(cooked[0])
});