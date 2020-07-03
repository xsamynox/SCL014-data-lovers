import { example } from './data.js';
// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

const crearPlantillaPokemon = (name,image,num) => `
        <section class="name-pokemon">
            <section class="img-pokemon">
            <img src="${image}" alt="${name}">
            </section>
            <h2 id="number-poke">#${num}</h2>
            <h1 id="name-poke">${name}</h1>
        </section>
    `;


const obtenerLugarParaImprimir = (identificador) => document.getElementById(identificador);

const containerPokedex = obtenerLugarParaImprimir("pokemon-container");

const imprimirEnPantalla = (pokemon) => {
    containerPokedex.insertAdjacentHTML("beforeend", pokemon);
};

//recorremos el arreglo de todos los pokemones
data.pokemon.forEach(pokemonAtrib => {
    //obtener nombre y pasar la primera letra de name a mayús
    const pokemonName = pokemonAtrib.name.charAt(0).toUpperCase() + pokemonAtrib.name.slice(1);

    //obtener numero
    const pokemonNum = pokemonAtrib.num;

    //obtener imagen
    const pokemonImg = pokemonAtrib.img;

    const pokemon = crearPlantillaPokemon(pokemonName,pokemonImg,pokemonNum);

    imprimirEnPantalla(pokemon);
});
