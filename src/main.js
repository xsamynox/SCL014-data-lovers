import { filtrarPorNombre } from './data.js';

import data from './data/pokemon/pokemon.js';


const irPokedex = () => {
  document.getElementById('screen-welcome').style.display = 'none';
  const body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(./imagen/banner-sky2-01a.png)';
  const main = document.getElementsByTagName('main')[0];
  const aside= document.getElementsByTagName('aside')[0];
  main.style.display = 'block';
  aside.style.display = 'flex';
}

document.getElementById('pokedex-welcome').addEventListener('click', () => irPokedex());


const open = () => document.getElementById('aside').classList.add('visible');

const close = () => document.getElementById('aside').classList.remove('visible');

const obtenerLugarParaImprimir = identificador => document.getElementById(identificador);

const containerPokedex = obtenerLugarParaImprimir('pokemon-container');

const pintarEnPantalla = (pokemones) => {
    containerPokedex.innerHTML = "";
    pokemones.forEach((pokemonAtrib) => {
        const pokemonName = pokemonAtrib.name.charAt(0).toUpperCase() + pokemonAtrib.name.slice(1);
        const pokemonNum = pokemonAtrib.num;
        const pokemonImg = pokemonAtrib.img;
        const pokemon = crearPlantillaPokemon(pokemonName, pokemonImg, pokemonNum);
        imprimirEnPantalla(pokemon);
    });
};

const inputNombrePokemon = document.getElementById('input-name-pokemon');
inputNombrePokemon.addEventListener('input', () => {
  const valorAFiltrar = inputNombrePokemon.value;
  const pokemonesFiltrados = filtrarPorNombre(valorAFiltrar); 
  pintarEnPantalla(pokemonesFiltrados);
});

document.getElementById('openPage').addEventListener('click', () => open());
document.getElementById('closePage').addEventListener('click', () => close());


const crearPlantillaPokemon = (name, image, num) => `
        <section class="name-pokemon">
            <section class="img-pokemon">
            <img src="${image}" alt="${name}">
            </section>
            <h2 id="number-poke">#${num}</h2>
            <h1 id="name-poke">${name}</h1>
        </section>
    `;

const imprimirEnPantalla = (pokemon) => {
  containerPokedex.insertAdjacentHTML('beforeend', pokemon);
};

// recorremos el arreglo de todos los pokemones
pintarEnPantalla(data.pokemon); 