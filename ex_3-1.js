var fs = require('fs');

fs.appendFile('ukinode.txt','uki coding school', 'very Excelent','full stack web devlopment' function (err) {
  if (err) throw err;
  console.log('Saved!');
});
