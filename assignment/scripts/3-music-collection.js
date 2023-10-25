('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
('Look at my new record shelf!', myCollection);

// INPUT: collection title artist yearPublished
// CODE: new {} with arguments as properties
//       new {} -> end of [collection]
// OUTPUT: new object
function addToCollection(collection, title, artist, yearPublished) {
  let record = {
    'collection': collection,
    'title': title,
    'artist': artist,
    'yearPublished': yearPublished
  }
  myCollection.push(record);
  return record;
}

addToCollection(myCollection, 'Only A Lad', 'Oingo Boingo', 1981);
addToCollection(myCollection, 'System Of A Down', 'System Of A Down', 1998);
addToCollection(myCollection, 'Hybrid Theory', 'Linkin Park', 2000);
addToCollection(myCollection, 'Tired Of Tomorrow', 'Nothing', 2016);
addToCollection(myCollection, 'Hold Your Horse Is', 'Hella', 2002);
addToCollection(myCollection, 'Fantastic Planet', 'Failure', 1996);
addToCollection(myCollection, 'Hey What', 'Low', 2021);
addToCollection(myCollection, 'I Could Live In Hope', 'Low', 1994);
addToCollection(myCollection, 'Akuma No Uta', 'Boris', 2003);
addToCollection(myCollection, 'Bleach', 'Nirvana', 1989);
addToCollection(myCollection, 'In Utero', 'Nirvana', 1993);
addToCollection(myCollection, 'H.A.Q.Q.', 'Liturgy', 2019);
addToCollection(myCollection, 'The Ark Work', 'Liturgy', 2015);
addToCollection(myCollection, 'Loveless', 'My Bloody Valentine', 1991);
addToCollection(myCollection, 'Isn\'t Anything', 'My Bloody Valentine', 1988);
addToCollection(myCollection, 'A Brief Memoriam', 'Frail Body', 2019);
addToCollection(myCollection, 'Blake Mills', 'Blake Mills', 2010);
console.log(myCollection);

// INPUT: collection
// Loop collection, console.log album information
    // formatted TITLE by ARTIST, published in YEAR`.
function showCollection(collection) {
  for (record of collection) {
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}`)
  }
  return 'done';
}
// ????? console shows this ^ is not a function. what!!! ?????
showCollection(myCollection)

// function `findByArtist`
// INPUT: `collection`, `artist`
// CODE: empty [] for results
//       loop collection
//       push matches to []
// OUTPUT: [] with matching results (empty if none)
function findByArtist(collection, artist) {
  let searchResults = [];
  for (record of collection) {
    if (record.artist === artist) {
      searchResults.push(record);
    }
  }
  console.log('Search complete. Matches:', searchResults);
  return searchResults;
}
findByArtist(myCollection, 'Boris')

console.log(' --------------- test results -----------------')
// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
