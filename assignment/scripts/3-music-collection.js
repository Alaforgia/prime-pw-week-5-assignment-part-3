console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished){
  let musicList = {
    title: '',
    artist: '',
    yearPublished: '',
  }
  collection.push(musicList);
  return musicList;
}
// Test
console.log(addToCollection());
console.log(collection);
