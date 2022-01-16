console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished){
  const musicList = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(musicList);
  return musicList;
}
 // // Test
// console.log(addToCollection());
// console.log(collection);

addToCollection('Demon Days', 'Gorillaz', '2005');
addToCollection('Enter the Wu-Tang (36 Chambers', 'Wu-Tang Clan', '1993');
addToCollection('Imperial Bedroom', 'Chet Baker', '1982');
addToCollection('Power in Numbers', 'Jurassic 5', '2002');
addToCollection('Stankonia', 'Outkast', '2000');
addToCollection('Discovery', 'Daft Punk', '2001');
addToCollection('Homework', 'Daft Punk', '1997');

for (var i = 0; i < collection.length; i++) {
  console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished} was added to the collection`);
}
console.log(collection);

function  showCollection(arr){
  console.log(arr.length);
  for (var i = 0; i < collection.length; i++) {
    console.log(`${arr[i].title} by ${arr[i].artist}, published in ${arr[i].yearPublished}`);
  }
}
showCollection(collection);

function findByArtist(artist){
  const arr = [];
  for (var i = 0; i < collection.length; i++) {
    collection[i];
    if (artist === collection[i].artist) {
      arr.push(collection[i]);
    }
  }
return arr;
}
console.log(findByArtist('Gorillaz'));
console.log(findByArtist('Daft Punk'));
console.log(findByArtist('Nirvana'));

function search(userInput){
  const searchProp = {

  }

}
