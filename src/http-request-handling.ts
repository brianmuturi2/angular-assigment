const episodesUrl = 'https://rickandmortyapi.com/api/episode';

async function getAllEpisodes() {
    const res = await fetch(episodesUrl);
    const episodes = await res.json();

    for (const episode of episodes.results) {
        episode.characters = await Promise.all(episode.characters.map(url => fetch(url)));
        episode.characters = await Promise.all(episode.characters.map(character => character.json()));
    }

    console.log('Episodes are')
    console.log(episodes.results);

}
getAllEpisodes()
