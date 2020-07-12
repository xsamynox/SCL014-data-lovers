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

// Pintando en pantalla solo los pokemones filtrados por medio del buscador.
const inputNombrePokemon = document.getElementById('input-name-pokemon');

// obtener lugar donde se imprimen pokemones
const containerPokedex = buscadorDeId('pokemon-container');

const  modal = buscadorDeId("modal");

// Get the <span> element that closes the modal
const span = buscadorDeId("close");
span.addEventListener('click', () => {
  modal.style.display = "none";
});

// Obtener el boton que abre el modal
const asignarEvento = () => {
  document.querySelectorAll('[data-pokemon]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.pokemon;
      const pokemonEncontrado = buscarId(id);
      const pokemonImpreso = crearPlantillaModal(
        pokemonEncontrado.name,
        pokemonEncontrado.num,
        pokemonEncontrado.img,
        pokemonEncontrado.about,
        pokemonEncontrado.type,
        pokemonEncontrado.resistant,
        pokemonEncontrado.weaknesses
        );    
      imprimirEnModal(pokemonImpreso);   
      modal.style.display = "block"; 
    });
  });
};


// Mostrando y ocultando el menu desplegable.
const toggleAside = (boolean) => {
  if (boolean) {
    buscadorDeId('aside').classList.add('visible');
  } else {
    buscadorDeId('aside').classList.remove('visible');
  }
};
buscadorDeId('openPage').addEventListener('click', () => toggleAside(true));
buscadorDeId('closePage').addEventListener('click', () => toggleAside(false));

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

// Creando la plantilla donde estaran los Pokemon
const crearPlantillaPokemon = (name, image, num) => `
        <button class="name-pokemon" data-pokemon="${num}"> 
            <section class="img-pokemon">
            <img src="${image}" alt="${name}">
            </section>
            <h2 id="number-poke">#${num}</h2>
            <h1 id="name-poke">${name}</h1>
        </button>
    `;
const imprimirEnPantalla = (pokemon) => {
  containerPokedex.insertAdjacentHTML('beforeend', pokemon);
};

// Imprimiendo en pantalla la plantilla genetal
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

// Imprime tipos en select de html
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

//Creando plantilla modal
const crearPlantillaModal = (name, num, image, about, type, resistant, weaknesses) => `
        <section>
          <p>${name}</p>
          <br>
          <p>#${num}</p>
        </section>
        <section>
          <img src="${image}" alt="${name}">
          <p>Acerca: ${about}</p>
        </section>
        <section>
        <p>Tipo: ${type}</p>
        </section>
        <section>
          <p>Resistencia: ${resistant}</p> 
          <p>Debilidades: ${weaknesses}</p>
        </section>
    `;

const containerModal = buscadorDeId('pokemon-container-modal');
const imprimirEnModal = (div) => {
  containerModal.innerHTML = '';
  containerModal.insertAdjacentHTML('beforeend', div);
};

// recorremos el arreglo de todos los pokemones
pintarEnPantalla(data.pokemon);

// asignar evento a cada pokemon de la pantalla
asignarEvento();

// Mostrar en pantala los tipos seleccionados.
pintarEnSelector(obtenerTipos());
