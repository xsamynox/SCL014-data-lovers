// Creando plantilla para el modal
export const crearPlantillaModal = (name, num, image, about, type, resistant, weaknesses) => `
        <section>
        <section>
          <h2 class="tittle-modal">${name}</h2>
          <h3>#${num}</h3>
        </section>
        <section>
          <img src="${image}" alt="${name}">
        </section>
        <section class="div-about">
          <p>${about}</p>
        </section>
        <section>
          <section class="type">
            <p><strong>Tipo:</strong> ${type}</p>
          </section>
          <section>
            <p id ="resistencia"><strong>Resistencia:</strong> ${resistant}</p> 
            <p><strong>Debilidades:</strong> ${weaknesses}</p>
          </section>
        </section>
`;

// Creando la plantilla de los pokemones en la Pokedex
export const crearPlantillaPokemon = (name, image, num) => `
  <button class="name-pokemon" data-pokemon="${num}"> 
    <section class="img-pokemon">
      <img src="https://cdn.lowgif.com/small/7d9ca40f5d37c1b3-transparent-pokeball-tumblr.gif" alt="" class="pokeball-img">
      <img id="imagen-cada-poke" src="${image}" alt="${name}" class="pokemon-img">
    </section>
    <h2>#${num}</h2>
    <h1>${name}</h1>
  </button>
`;

// Plantilla que crea los tipos de pokemon en el select de html
export const crearPlantillaPokemonTipo = type => `
    <select>
        <option value="${type}">${type}</option>
    </select>
`;

