// estas funciones son de ejemplo

import data from './data/pokemon/pokemon.js';

export const obtenerTipos = () => {
  const tipos = data.pokemon.flatMap(pokemonAtrib => pokemonAtrib.type);
  const tiposUnicos = [...new Set(tipos)];
  return tiposUnicos;
};
// pokemones filtrados por tipo y nombre ingresado en simultaneo
export const filtrarPorNombre = ((valorAFiltrar, pokemones) => {
  const filtroNombre = pokemones.filter(pokemonAtrib => {
    return pokemonAtrib.name.includes(valorAFiltrar.toLowerCase()) || pokemonAtrib.num.includes(valorAFiltrar)
  });
  return filtroNombre;
});

export const filtrarPorTipo = ((tipo, pokemones) => {
  if(tipo ==='todos') {
    return pokemones;
  }  
  const filtroPorTipo = pokemones.filter(element => element.type.includes(tipo));
  return filtroPorTipo;
});

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

export const filtroEnConjunto = (orden, tipoSeleccionado, nombreBuscado) => {  
  const pokemonesFiltradoPorTipo = filtrarPorTipo(tipoSeleccionado, data.pokemon);
  const ordenPorNombreTipo = filtrarPorNombre(nombreBuscado, pokemonesFiltradoPorTipo);
  const pokemonesPorNombreTipoOrdenados = ordenarPokemon(orden, ordenPorNombreTipo);
  return pokemonesPorNombreTipoOrdenados;
};
