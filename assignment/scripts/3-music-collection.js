console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
console.log('Here is my record collection box! Take a look below:');
console.log(myCollection);

function addToCollection(collection, title, artist, yearPublished){
  if(collection===myCollection){
    let record = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
    }
    myCollection.push(record);
    console.log('Added', title, 'to my collection!');
    return record;
  }else{
    console.log('Not my collection. Try again!');
    return false;
  }
}

console.log(addToCollection(myCollection, 'Only A Lad', 'Oingo Boingo', 1981));
console.log(addToCollection(myCollection, 'System Of A Down', 'System Of A Down', 1998));
console.log(addToCollection(myCollection, 'Hybrid Theory', 'Linkin Park', 2000));
console.log(addToCollection(myCollection, 'Tired Of Tomorrow', 'Nothing', 2016));
console.log(addToCollection(myCollection, 'Hold Your Horse Is', 'Hella', 2002));
console.log(addToCollection(myCollection, 'Fantastic Planet', 'Failure', 1996));
console.log(addToCollection(myCollection, 'Hey What', 'Low', 2021));
console.log(addToCollection(myCollection, 'I Could Live In Hope', 'Low', 1994));
console.log(addToCollection(myCollection, 'Akuma No Uta', 'Boris', 2003));
console.log(addToCollection(myCollection, 'Bleach', 'Nirvana', 1989));
console.log(addToCollection(myCollection, 'In Utero', 'Nirvana', 1993));
console.log(addToCollection(myCollection, 'H.A.Q.Q.', 'Liturgy', 2019));
console.log(addToCollection(myCollection, 'The Ark Work', 'Liturgy', 2015));
console.log(addToCollection(myCollection, 'Loveless', 'My Bloody Valentine', 1991));
console.log(addToCollection(myCollection, 'Isn\'t Anything', 'My Bloody Valentine', 1988));
console.log(addToCollection(myCollection, 'A Brief Memoriam', 'Frail Body', 2019));
console.log(addToCollection(myCollection, 'Blake Mills', 'Blake Mills', 2010));
console.log(myCollection);

function showCollection(collection){
  while(collection){
    console.log(record.yearPublished + ':', record.title, 'by', record.artist + '.');
  }
}
showCollection(myCollection);

console.log(' --- test code below --- ');
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
