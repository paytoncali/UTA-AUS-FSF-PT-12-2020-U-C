// TODO: What are we importing?
const fs = require('fs');
// importing the API

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
// creating log.txt, adding process.argv to file
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
