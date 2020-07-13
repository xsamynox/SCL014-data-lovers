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
// obtener el id del modal
const modal = buscadorDeId('modal');

// Get the <span> element that closes the modal
const span = buscadorDeId('close');
span.addEventListener('click', () => {
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

// Obtener el boton que abre el modal
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

// Mostrando y ocultando el menu desplegable.
const menuLateral = buscadorDeId('aside');
const toggleAside = (boolean) => {
  if (boolean) {
    menuLateral.classList.add('visible');
  } else {
    menuLateral.classList.remove('visible');
  }
};
buscadorDeId('openPage').addEventListener('click', () => toggleAside(true));
buscadorDeId('closePage').addEventListener('click', () => toggleAside(false));

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
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
  const screen1 = window.matchMedia('(max-width: 736px)');
  myMedia(screen1); // Call listener function at run time
  screen1.addListener(myMedia); // Attach listener function on state changes
};

// Al hacer click ir Mostrando y ocultando pantallas en el celular
document.getElementById('pokedex-welcome').addEventListener('click', () => irPokedex());

// Creando la plantilla para los pokemones en la Pokedex
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

// Agregando style desde el JS
const openNidos = () => {
  const myMedia = (x) => {
    const body = document.getElementsByTagName('body')[0];
    document.getElementById('screen-welcome').style.display = 'none';
    document.getElementById('section-nidos').style.display = 'block';
    document.getElementsByTagName('main')[0].style.display = 'none';
    document.getElementById('aside').style.display = 'block';
    // document.getElementById('closePage').style.display = 'none';
    const y = window.matchMedia('(min-width: 992px)');
    if (x.matches) { // If media query matches
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos1.png)';
      document.getElementById('aside').style.display = 'flex';
    } else if (y.matches) {
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos.png)';
    } else {
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos3.png)';
    }
  };
  const screen = window.matchMedia('(max-width: 736px)');
  myMedia(screen); // Call listener function at run time
  screen.addListener(myMedia); // Attach listener function on state changes
};

// Al hacer click en el boton nido de la Pprincipal se va a otra pantalla
document.getElementById('nidos').addEventListener('click', () => openNidos());
// Al hacer click en el boton nido del aside se va a otra pantalla
document.getElementById('nidos1').addEventListener('click', () => openNidos());
// Al hacer click en el boton pokedex del aside se va a otra pantalla
document.getElementById('pokedex').addEventListener('click', () => irPokedex());
