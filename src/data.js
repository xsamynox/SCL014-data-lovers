// estas funciones son de ejemplo

import data from './data/pokemon/pokemon.js';

export const obtenerTipos = () => {
  const tipos = data.pokemon.flatMap(pokemonAtrib => pokemonAtrib.type);
  const tiposUnicos = [...new Set(tipos)];
  return tiposUnicos;
};

export const filtrarPorNombre = (valorAFiltrar) => {
  const filtroNombre = data.pokemon.filter(pokemonAtrib => pokemonAtrib.name.includes(valorAFiltrar)
  || pokemonAtrib.num.includes(valorAFiltrar));
  return filtroNombre;
};

export const filtrarPorTipo = ((tipo) => {
  const filtroPorTipo = data.pokemon.filter(element => element.type.includes(tipo));
  return filtroPorTipo;
});

export const ordenarPokemon = () => {
  const datapoke = data.pokemon;
  const ordenPorNombre = datapoke.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return ordenPorNombre;
};
