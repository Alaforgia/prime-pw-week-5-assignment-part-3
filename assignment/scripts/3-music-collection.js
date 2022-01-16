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

collection.push('DARE', 'Gorillaz', '2005');
collection.push('Enter the Wu-Tang (36 Chambers)', 'Wu-Tang Clan', '1993')


console.log(addToCollection(collection));
