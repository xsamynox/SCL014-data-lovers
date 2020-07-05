// estas funciones son de ejemplo

import data from './data/pokemon/pokemon.js';

export const obtenerTipos = () => {
    let tipos = data.pokemon.flatMap(pokemonAtrib => pokemonAtrib.type);
    let tiposUnicos = [...new Set(tipos)];
    return tiposUnicos;
};

export const filtrarPorNombre = (valorAFiltrar) => {    
    let filtroNombre = data.pokemon.filter(pokemonAtrib => pokemonAtrib.name.includes(valorAFiltrar) || pokemonAtrib.num.includes(valorAFiltrar));
    return filtroNombre;
};
