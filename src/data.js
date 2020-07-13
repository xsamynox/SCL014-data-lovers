
import data from './data/pokemon/pokemon.js';

export const obtenerTipos = () => {
  const tipos = data.pokemon.flatMap(pokemonAtrib => pokemonAtrib.type);
  const tiposUnicos = [...new Set(tipos)];
  return tiposUnicos;
};

// Filtro por tipo y nombre ingresado en simultaneo
export const filtrarPorNombre = ((valorAFiltrar, pokemones) => {
  const filtroNombre = pokemones.filter(atrib => atrib.name.includes(valorAFiltrar.toLowerCase())
    || atrib.num.includes(valorAFiltrar));
  return filtroNombre;
});

// Al seleccionar todos, se muestran todos los tipos de pokemon.
export const filtrarPorTipo = ((tipo, pokemones) => {
  if (tipo === 'todos') {
    return pokemones;
  }
  const filtroPorTipo = pokemones.filter(element => element.type.includes(tipo));
  return filtroPorTipo;
});

// Filtro ordenar AZ-ZA
export const ordenarPokemon = (orden, pokemones) => {
  const datapoke = pokemones;
  const ordenPorNombre = datapoke.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  if (orden === 'descendente') {
    return ordenPorNombre.reverse();
  }
  return ordenPorNombre;
};

// Filtrar en conjunto
export const filtroEnConjunto = (orden, tipoSeleccionado, nombreBuscado) => {
  const pokemonesFiltradoPorTipo = filtrarPorTipo(tipoSeleccionado, data.pokemon);
  const ordenPorNombreTipo = filtrarPorNombre(nombreBuscado, pokemonesFiltradoPorTipo);
  const pokemonesPorNombreTipoOrdenados = ordenarPokemon(orden, ordenPorNombreTipo);
  return pokemonesPorNombreTipoOrdenados;
};

// Buscar id de cada pokemon
export const buscarId = ((pokemonNumber) => {
  const pokemonNum = data.pokemon.find(pokemon => pokemon.num === pokemonNumber);
  return pokemonNum;
});
