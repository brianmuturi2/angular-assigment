
const episodesUrl = 'https://rickandmortyapi.com/api/episode';

async function getAllEpisodes() {
  const res = await fetch(episodesUrl);
  const episodes = await res.json();

 let len = episodes.results.length;
 let epRes = episodes.results;
 let i = 0;
 
 while (i < len) {
   	epRes[i].characters = await Promise.all(epRes[i].characters.map(character => {
    	async function getCharacter(url) {
      	const characterRes = await fetch(url);
        return characterRes.json();
      }
      return getCharacter(character);
    }))
    i++
 }
  
  console.log('episode characters are ', episodes.results)
}
getAllEpisodes()
