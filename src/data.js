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
