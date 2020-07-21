
import {
  obtenerTipos, filtroEnConjunto, buscarId,
}
  from './data.js';

import {
    crearPlantillaModal,
    crearPlantillaPokemon,
    crearPlantillaPokemonTipo,
}
  from './template.js'

let pokemones = [];
  // Obtener ID de elementos
const buscadorDeId = identificador => document.getElementById(identificador);
// Selector de a-z
const selectorPorOrden = buscadorDeId('selectOrder');
// Selector de tipo de pokemon
const selectorTipoPokemon = buscadorDeId('type-pokemon');
// Buscador input
const inputNombrePokemon = buscadorDeId('input-name-pokemon');
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
      const pokemonEncontrado = buscarId(id, pokemones);
      const pokemonImpreso = crearPlantillaModal(
        pokemonEncontrado.name.charAt(0).toUpperCase() + pokemonEncontrado.name.slice(1),
        pokemonEncontrado.num,
        pokemonEncontrado.img,
        pokemonEncontrado.about,
        pokemonEncontrado.type.join(', '),
        pokemonEncontrado.resistant.join(', '),
        pokemonEncontrado.weaknesses.join(', '),
      );
      imprimirEnModal(pokemonImpreso);
      modal.style.display = 'block';
    });
  });
};

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


// Asignando en variables el valor de las option e input elegidos
// Imprimiendo en pantalla la plantilla ordenada 
const aplicarFiltros = () => {
  const orden = selectorPorOrden.value;
  const tipoSeleccionado = selectorTipoPokemon.value;
  const nombreBuscado = inputNombrePokemon.value;
  const pokemonesFiltradosPorTipo = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado, pokemones);
  pintarEnPantalla(pokemonesFiltradosPorTipo);
  asignarEvento(); // Permite que se abra el modal despues de aplicados los filtros
};

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

selectorPorOrden.addEventListener('change', aplicarFiltros);
selectorTipoPokemon.addEventListener('change',aplicarFiltros);
// Filtrar por nombre ingresado en input
inputNombrePokemon.addEventListener('input', aplicarFiltros);

// Al presionar cualquier lugar fuera del modal, se cierra
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

fetch('https://adbarquitectura.github.io/SCL014-data-lovers/data/pokemon/pokemon.json')
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);    
    pokemones = data.pokemon;
    // Mostrar en pantala los tipos seleccionados.
    pintarEnSelector(obtenerTipos(pokemones));
    // mostrar el arreglo de todos los pokemones
    pintarEnPantalla(pokemones);
    // asignar evento a cada pokemon de la pantalla
    asignarEvento();   
  });
