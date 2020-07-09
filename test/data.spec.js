import {
  obtenerTipos, filtrarPorNombre, filtrarPorTipo, ordenarPokemon, filtroEnConjunto,
}
  from '../src/data.js';

import data from '../src/data/pokemon/pokemon.js';

describe('example', () => {
  /* it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  }); */
  /* describe('testing array functions', () => {
    it('will test the function', () => {
      const arrayOne = ["Alberto", "Fabian", "Gabriela", "Ana"];
      const filtrados = arrayOne.filter(num => num >= 3);
      const multiplicar = arrayOne.map(num => num * 10);
      const orderArray = arrayOne.sort((num1, num2) => num2-num);
      console.log(orderArray);

      console.log(multiplicar);

      console.log(filtrados);

      expect(true).toBe(true);
    });
  });  */

  describe('playing with pokemon', () => {
    it('play with pokemon', () => {
      // console.log(pokemonArray);
      /* pokemonArray.pokemon.forEach(pokemonAtrib => {
        console.log(pokemonAtrib.name);
        console.log(pokemonAtrib.weaknesses);
      }); */
  });
  describe('buscando tipos de pokemon', () => {
    it('obtener los tipos de pokemon', () => {
      // act
      const tiposPokemon = obtenerTipos(

      );
      // assert
      expect(tiposPokemon.length).toBe(18);
      // console.log(tiposPokemon);
    });
    it('obtener los pokemon pertenecientes a cada tipo', () => {
      // arrange
      const tipoSeleccionadoAfiltrar = 'grass';
      // act
      const pokemonesFiltradosPorTipo = filtrarPorTipo(tipoSeleccionadoAfiltrar, data.pokemon);
      // assert
      expect(pokemonesFiltradosPorTipo.length).toBe(24);
      // console.log(pokemonesFiltradosPorTipo.length);
      expect(pokemonesFiltradosPorTipo[0].name).toBe('bulbasaur');
    });
    // cambiar nombre
    it('obtener todos los pokemon pertenecientes a arreglo', () => {
      // arrange
      const tipoSeleccionadoAfiltrar = 'todos';
      // act
      const pokemonesFiltradosPorTipo = filtrarPorTipo(tipoSeleccionadoAfiltrar, data.pokemon);
      // assert
      expect(pokemonesFiltradosPorTipo.length).toBe(251);
      // console.log(pokemonesFiltradosPorTipo.length);
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
  // Filtra completa la data.
  describe('Ordenar pokemon alfabeticamente', () => {
    it('ordenar ascendente A-Z', () => {
      const orden = 'ascendente';
      // act
      const pokemon = ordenarPokemon(orden, data.pokemon);
      // console.log(pokemon);
      // assert
      expect(pokemon[2].name).toBe('aipom');
      // console.log(pokemon[2].name);
    });
    it('ordenar descendente Z-A', () => {
      const orden = 'descendente';
      // act
      const pokemon = ordenarPokemon(orden, data.pokemon);
      // console.log(pokemon);
      // assert
      expect(pokemon[2].name).toBe('yanma');
      // console.log(pokemon[2].name);
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
});
