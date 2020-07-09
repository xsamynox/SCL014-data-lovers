import data from './data/pokemon/pokemon.js';

import {
  obtenerTipos, filtroEnConjunto,
} from './data.js';

// Mostrando y ocultando el menu desplegable.
const toggleAside = (boolean) => {
  if (boolean) {
    document.getElementById('aside').classList.add('visible');
  } else {
    document.getElementById('aside').classList.remove('visible');
  }
};
document.getElementById('openPage').addEventListener('click', () => toggleAside(true));
document.getElementById('closePage').addEventListener('click', () => toggleAside(false));

const obtenerLugarParaImprimir = identificador => document.getElementById(identificador);
const containerPokedex = obtenerLugarParaImprimir('pokemon-container');

// Creando la plantilla donde estaran los Pokemon
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

// Imprimiendo en pantalla la plantilla
const pintarEnPantalla = (pokemones) => {
  containerPokedex.innerHTML = '';
  pokemones.forEach((pokemonAtrib) => {
    const pokemonName = pokemonAtrib.name.charAt(0).toUpperCase() + pokemonAtrib.name.slice(1);
    const pokemonNum = pokemonAtrib.num;
    const pokemonImg = pokemonAtrib.img;
    const pokemon = crearPlantillaPokemon(pokemonName, pokemonImg, pokemonNum);
    imprimirEnPantalla(pokemon);
  });
};

// Selector de a-z
const selectorPorOrden = obtenerLugarParaImprimir('selectOrder');

// Selector de tipo de pokemon
const selectorTipoPokemon = obtenerLugarParaImprimir('type-pokemon');

// Pintando en pantalla solo los pokemones filtrados por medio del buscador.
const inputNombrePokemon = document.getElementById('input-name-pokemon');

selectorPorOrden.addEventListener('change', () => {
  const orden = selectorPorOrden.value;
  const tipoSeleccionado = selectorTipoPokemon.value;
  const nombreBuscado = inputNombrePokemon.value;
  containerPokedex.innerHTML = '';
  const ordenados = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado);
  pintarEnPantalla(ordenados);
});

const crearPlantillaPokemonTipo = type => `
        <select>
          <option value="${type}">${type}</option>
        </select>
    `;

const imprimirEnSelector = (select) => {
  selectorTipoPokemon.insertAdjacentHTML('beforeend', select);
};

const pintarEnSelector = (type) => {
  type.forEach((tipoPokemones) => {
    const pokemonType = tipoPokemones;
    const tipo = crearPlantillaPokemonTipo(pokemonType);
    imprimirEnSelector(tipo);
  });
};
pintarEnSelector(obtenerTipos());
// Pintando en pantalla solo los pokemones filtrados por tipo.
selectorTipoPokemon.addEventListener('change', () => {
  const orden = selectorPorOrden.value;
  const tipoSeleccionado = selectorTipoPokemon.value;
  const nombreBuscado = inputNombrePokemon.value;  
  const pokemonesFiltradosPorTipo = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado);
  pintarEnPantalla(pokemonesFiltradosPorTipo);
});

// Agregando style desde el JS
const irPokedex = () => {
  const myMedia = (x) => {
    document.getElementById('screen-welcome').style.display = 'none';
    const main = document.getElementsByTagName('main')[0];
    const aside = document.getElementsByTagName('aside')[0];
    main.style.display = 'block';
    aside.style.display = 'flex';
    const body = document.getElementsByTagName('body')[0];
    if (x.matches) { // If media query matches
      body.style.backgroundImage = 'url(./imagen/banner-sky2-01a.png)';
    } else {
      body.style.backgroundImage = 'url(./imagen/banner-sky2-03a.png)';
    }
  };
  const x = window.matchMedia('(max-width: 736px)');
  myMedia(x); // Call listener function at run time
  x.addListener(myMedia); // Attach listener function on state changes
};
// Al hacer click ir Mostrando y ocultando pantallas en el celular
document.getElementById('pokedex-welcome').addEventListener('click', () => irPokedex());

inputNombrePokemon.addEventListener('input', () => {
  const orden = selectorPorOrden.value;
  const tipoSeleccionado = selectorTipoPokemon.value;
  const nombreBuscado = inputNombrePokemon.value;
  const pokemonesFiltrados = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado);
  pintarEnPantalla(pokemonesFiltrados);
});

// recorremos el arreglo de todos los pokemones
pintarEnPantalla(data.pokemon);
