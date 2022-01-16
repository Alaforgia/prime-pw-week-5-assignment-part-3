console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished){
  const musicList = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(musicList);
  console.log(collection);
  // console.log(`${title} by the ${artist} was released in ${yearPublished}`);
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
addToCollection('Discovery', 'Face to Face', '2001');

// console.log(addToCollection(collection));
