import fetch from 'cross-fetch';

const episodesUrl = 'https://rickandmortyapi.com/api/episode';

async function getAllEpisodes() {
    const res = await fetch(episodesUrl);
    const episodes = await res.json();

    for (const episode of episodes.results) {
        episode.characters = await Promise.all(episode.characters.map((url: string) => fetch(url)));
        episode.characters = await Promise.all(episode.characters.map((character: any) => character.json()));
    }

    console.log('Episodes are')
    console.log(episodes.results);
    console.log('Sample character object')
    console.log(episodes.results[0].characters[0])
}
getAllEpisodes()
