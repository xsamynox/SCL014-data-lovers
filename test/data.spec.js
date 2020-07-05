import { obtenerTipos, filtrarPorNombre } from '../src/data.js';


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
      const arrayOne = [9, 6, 55, 1, 2, 3, 4, 8888];

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
      let tiposPokemon = obtenerTipos();
      // assert
      expect(tiposPokemon.length).toBe(18);
    });
  });
  describe('filtrar pokemones', () => {
   it('filtrar por nombres de pokemon', () => {
    //arrange
    let valorAfiltrar = "char";

    //act
    let pokemonesFiltrados = filtrarPorNombre(valorAfiltrar);
    
    //assert
    expect(pokemonesFiltrados.length).toBe(3);

   });
  });
});
