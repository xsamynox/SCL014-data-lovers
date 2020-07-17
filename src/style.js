// Obtener ID de elementos
const buscadorDeId = identificador => document.getElementById(identificador);
// Mostrando y ocultando el menu desplegable.
const menuLateral = document.getElementById('aside');
// secciones dentro de pantallas
const main = document.getElementsByTagName('main')[0];
const aside = document.getElementsByTagName('aside')[0];
const screenMini = window.matchMedia('(min-width: 992px)');
const screenMaxi = window.matchMedia('(max-width: 736px)');
const body = document.getElementsByTagName('body')[0];
// Pantallas
const screenWelconme = buscadorDeId('screen-welcome');
const screenNidos = buscadorDeId('section-nidos');
const screenEvolution = buscadorDeId('section-evolution');
const screenGlossary = buscadorDeId('section-glossary');
const goBack = buscadorDeId('go-back');

// Alternar que muestre y oculte menu desplegable
const toggleAside = (boolean) => {
  if (boolean) {
    menuLateral.classList.add('visible');
  } else {
    menuLateral.classList.remove('visible');
  }
};
buscadorDeId('openPage').addEventListener('click', () => toggleAside(true));
buscadorDeId('closePage').addEventListener('click', () => toggleAside(false));

// Pokedex
const irPokedex = () => {
  const myMedia = (screenSize) => {
    main.style.display = 'block';
    screenWelconme.style.display = 'none';
    screenNidos.style.display = 'none';
    goBack.style.display = 'none';
    if (screenSize.matches) { // If media query matches
      body.style.backgroundImage = 'url(./imagen/banner-sky2-01a.png)';
      aside.style.display = 'flex';
    } else if (screenMini.matches) {
      body.style.backgroundImage = 'url(./imagen/banner-sky2-02.png)';
    } else {
      body.style.backgroundImage = 'url(./imagen/banner-sky2-03a.png)';
      aside.style.display = 'flex';
    }
  };
  myMedia(screenMaxi); // Call listener function at run time
  screenMaxi.addListener(myMedia); // Attach listener function on state changes
};

// Nidos
const openNidos = () => {
  const myMedia = (screenSize) => {
    screenWelconme.style.display = 'none';
    main.style.display = 'none';
    screenNidos.style.display = 'block';
    if (screenSize.matches) { // Smartphone / If media query matches
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos1.png)';
      aside.style.display = 'flex';
    } else if (screenMini.matches) { // Desktop
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos.png)';
      aside.classList.remove('visible');
      goBack.style.display = 'block';
    } else { // Tablet
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos3.png)';
      aside.style.display = 'flex';
    }
  };
  myMedia(screenMaxi); // Call listener function at run time
  screenMaxi.addListener(myMedia); // Attach listener function on state changes
};

// Evolución
const goEvolution = () => {
  const myMedia = (screenSize) => {
    screenWelconme.style.display = 'none';
    main.style.display = 'none';
    screenNidos.style.display = 'none';
    screenEvolution.style.display = 'block';
    if (screenSize.matches) { // Smartphone / If media query matches
      body.style.backgroundImage = 'url(./imagen/banner-sky2-01a.png)';
      aside.style.display = 'flex';
    } else if (screenMini.matches) { // Desktop
      body.style.backgroundImage = 'url(./imagen/banner-sky2-02.png)';
      aside.classList.remove('visible');
      goBack.style.display = 'block';
    } else { // Tablet
      body.style.backgroundImage = 'url(./imagen/banner-sky2-03a.png)';
      aside.style.display = 'flex';
    }
  };
  myMedia(screenMaxi); // Call listener function at run time
  screenMaxi.addListener(myMedia); // Attach listener function on state changes
};

// Glosario
const goGlossary = () => {
  const myMedia = (screenSize) => {
    screenWelconme.style.display = 'none';
    main.style.display = 'none';
    screenNidos.style.display = 'none';
    screenEvolution.style.display = 'none';
    screenGlossary.style.display = 'block';
    if (screenSize.matches) { // Smartphone / If media query matches
      body.style.backgroundImage = 'url(./imagen/banner-sky2-01a.png)';
      aside.style.display = 'flex';
    } else if (screenMini.matches) { // Desktop
      body.style.backgroundImage = 'url(./imagen/banner-sky2-02.png)';
      aside.classList.remove('visible');
      goBack.style.display = 'block';
    } else { // Tablet
      body.style.backgroundImage = 'url(./imagen/banner-sky2-03a.png)';
      aside.style.display = 'flex';
    }
  };
  myMedia(screenMaxi); // Call listener function at run time
  screenMaxi.addListener(myMedia); // Attach listener function on state changes
};

// Al hacer click ir Mostrando y ocultando pantallas en el celular
buscadorDeId('pokedex-welcome').addEventListener('click', () => irPokedex());
// Al hacer click en el boton nido de la Pprincipal se va a otra pantalla
buscadorDeId('nidos').addEventListener('click', () => openNidos());
// Al hacer click en el boton nido del aside se va a otra pantalla
buscadorDeId('nidos1').addEventListener('click', () => openNidos());
// Al hacer click en el boton pokedex del aside se va a otra pantalla
buscadorDeId('pokedex').addEventListener('click', () => irPokedex());
// Al hacer click en el boton volver nos retorna a Pokedex
buscadorDeId('go-back').addEventListener('click', () => irPokedex());
// Al hacer click en el boton evolucion Pprincipal se va a otra pantalla
buscadorDeId('evolution').addEventListener('click', () => goEvolution());
// Al hacer click en el boton evolucion del aside se va a otra pantalla
buscadorDeId('evolution1').addEventListener('click', () => goEvolution());
// Al hacer click en el boton glosario Pprincipal se va a otra pantalla
buscadorDeId('glossary').addEventListener('click', () => goGlossary());
// Al hacer click en el boton glosario del aside se va a otra pantalla
buscadorDeId('glossary1').addEventListener('click', () => goGlossary());
