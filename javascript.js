// Function to fetch pokemon
async function fetchPoke(pokeName) {
    try{
        //fetch Poke with await
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        const pokemonData = await response.json();
        return pokemonData;
    } catch (error) {
        console.error('Pokemon Not Found!', error);
    }
}

//Get HTML elements and assign them a variable
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const pokemonInfoelement = document.getElementById('gallery');

//Event listener for button click
searchButton.addEventListener('click', async (event) => {
    let userInput = searchInput.value.trim(); //trim() for no spaces before or after user Input
    if (userInput) {
        const pokemonData = await fetchPoke(userInput.toLowerCase());
        if (pokemonData) {
            pokemonInfoelement.innerHTML = `
    <h2>${pokemonData.name}</h2>
    <hr>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
    <hr>
    <h3>Abilities:</h3>
        ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
    <hr>
    <h3>Type:</h3>
    <p>${pokemonData.types.map(type => type.type.name).join('')}</p>
    `;
        } else {
            pokemonInfoelement.innerHTML = `<p>Pokemon Not Found. Please try again!</p>`;
        }

}});
