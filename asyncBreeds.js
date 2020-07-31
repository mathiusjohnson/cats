const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("this is an error: ", error);
    console.log("this is data: ", data);
    console.log("In readFile's Callback: it has the data.");
    // console.log("this is breed: ", breed);
    if (error) {
      done(undefined);
    }
    if (!error) done(data);
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  if (breed === null) {
    return undefined;
  }
  console.log('Return Value: ', breed); // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;