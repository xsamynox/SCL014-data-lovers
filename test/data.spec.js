import {
  obtenerTipos, filtrarPorNombre, filtrarPorTipo, ordenarPokemon,
} from '../src/data.js';


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

      // filtar por los que son del tipo poison
      /* let pokemonPoison = pokemonArray.pokemon.filter((pokemonAtrib) => {
        pokemonAtrib.type.includes("poison");
        });
      console.log(pokemonPoison.length);
      pokemonPoison.forEach(pokemonAtrib =>{
        console.log(pokemonAtrib.name);
        console.log(pokemonAtrib.type);
      }); */
    });
  });
  describe('buscando tipos de pokemon', () => {
    it('obtener los tipos de pokemon', () => {
      // act
      const tiposPokemon = obtenerTipos();
      // assert
      expect(tiposPokemon.length).toBe(18);
      // console.log(tiposPokemon);
    });
    it('obtener los pokemon pertenecientes a cada tipo', () => {
      // arrange
      const tipoSeleccionadoAfiltrar = 'grass';
      // act
      const pokemonesFiltradosPorTipo = filtrarPorTipo(tipoSeleccionadoAfiltrar);
      // assert
      expect(pokemonesFiltradosPorTipo.length).toBe(24);
      // console.log(pokemonesFiltradosPorTipo.length);
      expect(pokemonesFiltradosPorTipo[0].name).toBe('bulbasaur');
    });
  });
  describe('filtrar pokemones', () => {
    it('filtrar por nombres de pokemon', () => {
      // arrange
      const valorAfiltrar = 'char';
      // act
      const pokemonesFiltrados = filtrarPorNombre(valorAfiltrar);
      // assert
      expect(pokemonesFiltrados.length).toBe(3);
    });
    it('filtrar por numeros de pokemon', () => {
      // arrange
      const valorAfiltrar = '001';
      // act
      const pokemonesFiltrados = filtrarPorNombre(valorAfiltrar);
      // assert
      expect(pokemonesFiltrados.length).toBe(1);
      expect(pokemonesFiltrados[0].name).toBe('bulbasaur');
    });
  });
  describe('Ordenar pokemon alfabeticamente', () => {
    it('ordenar ascendente A-Z', () => {
      // act --> yo decia que cosa mandi
      const pokemon = ordenarPokemon();
      // console.log(pokemon);
      // assert
      expect(pokemon[2].name).toBe('aipom');
      console.log(pokemon[2].name);
    });
  });
});
