import {
  obtenerTipos, filtrarPorNombre, filtrarPorTipo, ordenarPokemon, filtroEnConjunto, buscarId,
}
  from '../src/data.js';

import data from '../src/data/pokemon/pokemon.js';

describe('buscando tipos de pokemon', () => {
  it('obtener los tipos de pokemon', () => {
    // act
    const tiposPokemon = obtenerTipos();
    // assert
    expect(tiposPokemon.length).toBe(18);
  });

  it('obtener los pokemon pertenecientes a cada tipo', () => {
    // arrange
    const tipoSeleccionadoAfiltrar = 'grass';
    // act
    const pokemonesFiltradosPorTipo = filtrarPorTipo(tipoSeleccionadoAfiltrar, data.pokemon);
    // assert
    expect(pokemonesFiltradosPorTipo.length).toBe(24);
    expect(pokemonesFiltradosPorTipo[0].name).toBe('bulbasaur');
  });

  it('obtener todos los pokemon pertenecientes a arreglo', () => {
    // arrange
    const tipoSeleccionadoAfiltrar = 'todos';
    // act
    const pokemonesFiltradosPorTipo = filtrarPorTipo(tipoSeleccionadoAfiltrar, data.pokemon);
    // assert
    expect(pokemonesFiltradosPorTipo.length).toBe(251);
  });
});

describe('filtrar pokemones', () => {
  it('filtrar por nombres de pokemon', () => {
    // arrange
    const valorAfiltrar = 'char';
    // act
    const pokemonesFiltrados = filtrarPorNombre(valorAfiltrar, data.pokemon);
    // assert
    expect(pokemonesFiltrados.length).toBe(3);
  });

  it('filtrar por numeros de pokemon', () => {
    // arrange
    const valorAfiltrar = '001';
    // act
    const pokemonesFiltrados = filtrarPorNombre(valorAfiltrar, data.pokemon);
    // assert
    expect(pokemonesFiltrados.length).toBe(1);
    expect(pokemonesFiltrados[0].name).toBe('bulbasaur');
  });
});

describe('Ordenar pokemon alfabeticamente', () => {
  it('ordenar ascendente A-Z', () => {
    const orden = 'ascendente';
    // act
    const pokemon = ordenarPokemon(orden, data.pokemon);
    // assert
    expect(pokemon[2].name).toBe('aipom');
  });
  it('ordenar descendente Z-A', () => {
    const orden = 'descendente';
    // act
    const pokemon = ordenarPokemon(orden, data.pokemon);
    // assert
    expect(pokemon[2].name).toBe('yanma');
  });
});

describe('Va a mostrar los pokemones considerando ordenar, los filtros por tipo, e input ingresados por el usuario', () => {
  it('filtrar en conjunto por tipo, nombre y ordenar alfabeticamente ascendente', () => {
    // arrange
    const orden = 'ascendente';
    const tipoSeleccionado = 'grass';
    const nombreBuscado = 'bell';
    // act
    const pokemones = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado);
    // assert
    expect(pokemones[0].name).toBe('bellossom');
    expect(pokemones[1].name).toBe('bellsprout');
  });

  it('filtrar en conjunto por tipo, nombre y ordenar alfabeticamente descendente', () => {
    // arrange
    const orden = 'descendente';
    const tipoSeleccionado = 'grass';
    const nombreBuscado = 'bell';
    // act
    const pokemones = filtroEnConjunto(orden, tipoSeleccionado, nombreBuscado);
    // assert
    expect(pokemones[0].name).toBe('weepinbell');
    expect(pokemones[1].name).toBe('bellsprout');
  });
});

describe('obtener detalle de pokemon', () => {
  it('obtener id de cada pokemon', () => {
    // arrange
    const pokemonNum = '001';
    // act
    const pokemonByNum = buscarId(pokemonNum);
    // assert
    expect(pokemonByNum.num).toBe('001');
    expect(pokemonByNum.name).toBe('bulbasaur');
  });
});
