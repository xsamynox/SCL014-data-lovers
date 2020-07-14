// Obtener ID de elementos
const buscadorDeId = identificador => document.getElementById(identificador);
// Mostrando y ocultando el menu desplegable.
const menuLateral = document.getElementById('aside');

const toggleAside = (boolean) => {
  if (boolean) {
    menuLateral.classList.add('visible');
  } else {
    menuLateral.classList.remove('visible');
  }
};
buscadorDeId('openPage').addEventListener('click', () => toggleAside(true));
buscadorDeId('closePage').addEventListener('click', () => toggleAside(false));

// Al presionar cualquier lugar fuera del modal, se cierra
window.addEventListener('click', (event) => {
  if (event.target === menuLateral) {
    menuLateral.classList.remove('visible');
    buscadorDeId('openPage').addEventListener('click', () => toggleAside(true));
  }
});

// Agregando style desde el JS
const irPokedex = () => {
  const myMedia = (x) => {
    document.getElementById('screen-welcome').style.display = 'none';
    const main = document.getElementsByTagName('main')[0];
    const aside = document.getElementsByTagName('aside')[0];
    document.getElementById('section-nidos').style.display = 'none';
    main.style.display = 'block';
    const y = window.matchMedia('(min-width: 992px)');
    const body = document.getElementsByTagName('body')[0];
    if (x.matches) { // If media query matches
      body.style.backgroundImage = 'url(./imagen/banner-sky2-01a.png)';
      aside.style.display = 'flex';
    } else if (y.matches) {
      body.style.backgroundImage = 'url(./imagen/banner-sky2-02.png)';
    } else {
      body.style.backgroundImage = 'url(./imagen/banner-sky2-03a.png)';
      aside.style.display = 'flex';
    }
  };
  const screen1 = window.matchMedia('(max-width: 736px)');
  myMedia(screen1); // Call listener function at run time
  screen1.addListener(myMedia); // Attach listener function on state changes
};

// Al hacer click ir Mostrando y ocultando pantallas en el celular
document.getElementById('pokedex-welcome').addEventListener('click', () => irPokedex());

// Agregando style desde el JS
const openNidos = () => {
  const myMedia = (x) => {
    document.getElementById('screen-welcome').style.display = 'none';
    document.getElementsByTagName('main')[0].style.display = 'none';
    document.getElementById('section-nidos').style.display = 'block';
    const y = window.matchMedia('(min-width: 992px)');
    const body = document.getElementsByTagName('body')[0];
    if (x.matches) { // Smartphone / If media query matches
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos1.png)';
      document.getElementById('aside').style.display = 'flex';
    } else if (y.matches) { // Desktop
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos.png)';
      document.getElementById('aside').classList.remove('visible');
    } else { // Tablet
      body.style.backgroundImage = 'url(./imagen/pantalla-nidos3.png)';
      document.getElementById('aside').style.display = 'flex';
    }
  };
  const screen = window.matchMedia('(max-width: 736px)');
  myMedia(screen); // Call listener function at run time
  screen.addListener(myMedia); // Attach listener function on state changes
};

// Al hacer click en el boton nido de la Pprincipal se va a otra pantalla
buscadorDeId('nidos').addEventListener('click', () => openNidos());
// Al hacer click en el boton nido del aside se va a otra pantalla
buscadorDeId('nidos1').addEventListener('click', () => openNidos());
// Al hacer click en el boton pokedex del aside se va a otra pantalla
buscadorDeId('pokedex').addEventListener('click', () => irPokedex());
// Al hacer click en el boton volver nos retorna a Pokedex
buscadorDeId('go-back').addEventListener('click', () => irPokedex());
