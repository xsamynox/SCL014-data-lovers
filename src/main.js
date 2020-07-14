import data from './data/pokemon/pokemon.js';

import {
  obtenerTipos, filtroEnConjunto, buscarId,
}
  from './data.js';

// Obtener ID de elementos
const buscadorDeId = identificador => document.getElementById(identificador);
// Selector de a-z
const selectorPorOrden = buscadorDeId('selectOrder');
// Selector de tipo de pokemon
const selectorTipoPokemon = buscadorDeId('type-pokemon');
// Buscador input
const inputNombrePokemon = document.getElementById('input-name-pokemon');
// Obtener lugar donde se imprimen pokemones
const containerPokedex = buscadorDeId('pokemon-container');
// Obtener id del modal
const modal = buscadorDeId('modal');
// obtener elemento de cerrar modal <span>
const closeModal = buscadorDeId('close');
// cerrar modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Creando plantilla para el modal
const crearPlantillaModal = (name, num, image, about, type, resistant, weaknesses) => `
        <section>
          <h2>${name}<br>#${num}</h2>
        </section>
        <section>
          <img src="${image}" alt="${name}">
        </section>
        <section class="div-about">
          <p>${about}</p>
        </section>
        <section class="type">
        <p><strong>Tipo:</strong> ${type}</p>
        </section>
        <section>
          <p><strong>Resistencia:</strong> ${resistant}</p> 
          <p><strong>Debilidades:</strong> ${weaknesses}</p>
        </section>
    `;

const containerModal = buscadorDeId('pokemon-container-modal');
const imprimirEnModal = (div) => {
  containerModal.innerHTML = '';
  containerModal.insertAdjacentHTML('beforeend', div);
};

// Boton que abre el Modal / Contenido del modal
const asignarEvento = () => {
  document.querySelectorAll('[data-pokemon]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.pokemon;
      const pokemonEncontrado = buscarId(id);
      const pokemonImpreso = crearPlantillaModal(
        pokemonEncontrado.name.charAt(0).toUpperCase() + pokemonEncontrado.name.slice(1),
        pokemonEncontrado.num,
        pokemonEncontrado.img,
        pokemonEncontrado.about,
        pokemonEncontrado.type.join(',  '),
        pokemonEncontrado.resistant.join(',  '),
        pokemonEncontrado.weaknesses.join(',  '),
      );
      imprimirEnModal(pokemonImpreso);
      modal.style.display = 'block';
    });
  });
};

// Creando la plantilla de los pokemones en la Pokedex
const crearPlantillaPokemon = (name, image, num) => `
        <button class="name-pokemon" data-pokemon="${num}"> 
            <section class="img-pokemon">
            <img id="imagen-cada-poke" src="${image}" alt="${name}">
            </section>
            <h2>#${num}</h2>
            <h1>${name}</h1>
        </button>
    `;
const imprimirEnPantalla = (pokemon) => {
  containerPokedex.insertAdjacentHTML('beforeend', pokemon);
};

// Imprimiendo en pantalla la plantilla general
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

// Imprimiendo en pantalla la plantilla ordenada
selectorPorOrden.addEventListener('change', () => {
  const orden = selectorPorOrden.value;
  const tipoSeleccionado = selectorTipoPokemon.value;
  const nombreBuscado = inputNombrePokemon.value;
  containerPokedex.innerHTML = '';
  const ordenados = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado);
  pintarEnPantalla(ordenados);
  asignarEvento();
});

// Plantilla que crea los tipos de pokemon en el select de html
const crearPlantillaPokemonTipo = type => `
        <select>
          <option value="${type}">${type}</option>
        </select>
    `;

const imprimirEnSelector = (select) => {
  selectorTipoPokemon.insertAdjacentHTML('beforeend', select);
};

// Pintando en el selector los tipos de pokemon
const pintarEnSelector = (type) => {
  type.forEach((tipoPokemones) => {
    const pokemonType = tipoPokemones;
    const tipo = crearPlantillaPokemonTipo(pokemonType);
    imprimirEnSelector(tipo);
  });
};

// Pintando en pantalla solo los pokemones filtrados por tipo.
selectorTipoPokemon.addEventListener('change', () => {
  const orden = selectorPorOrden.value;
  const tipoSeleccionado = selectorTipoPokemon.value;
  const nombreBuscado = inputNombrePokemon.value;
  const pokemonesFiltradosPorTipo = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado);
  pintarEnPantalla(pokemonesFiltradosPorTipo);
  asignarEvento();
});

// Filtrar por nombre ingresado en input
inputNombrePokemon.addEventListener('input', () => {
  const orden = selectorPorOrden.value;
  const tipoSeleccionado = selectorTipoPokemon.value;
  const nombreBuscado = inputNombrePokemon.value;
  const pokemonesFiltrados = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado);
  pintarEnPantalla(pokemonesFiltrados);
  asignarEvento();
});

// Al presionar cualquier lugar fuera del modal, se cierra
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// recorremos el arreglo de todos los pokemones
pintarEnPantalla(data.pokemon);

// asignar evento a cada pokemon de la pantalla
asignarEvento();

// Mostrar en pantala los tipos seleccionados.
pintarEnSelector(obtenerTipos());
