import {
    obtenerTipos, filtrarPorTipo,
}
    from './data.js';

document.getElementById('pokemon-container').addEventListener('pokemones-cargados', (event) => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const arregloPoke = obtenerTipos(event.detail);
    const arregloTipo = arregloPoke.map(tipo => filtrarPorTipo(tipo, event.detail).length);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arregloPoke,
            datasets: [{
                label: '# pokemones',
                data: arregloTipo,
                backgroundColor: [
                    'rgba(0, 197, 20)',
                    'rgba(164, 80, 203)',
                    'rgba(255, 140, 57)',
                    'rgba(72, 230, 252)',
                    'rgba(21, 90, 223)',
                    'rgba(81, 107, 55)',
                    'rgba(178, 179, 177)',
                    'rgba(205, 227, 70)',
                    'rgba(119, 84, 23)',
                    'rgba(189, 89, 17)',
                    'rgba(238, 92, 223)',
                    'rgba(187, 171, 134)',
                    'rgba(7, 166, 255)',
                    'rgba(82, 40, 122)',
                    'rgba(149, 13, 36)',
                    'rgba(241, 182, 235)',
                    'rgba(68, 68, 68)',
                    'rgba(121, 97, 118)'
                ],
                borderColor: [
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                    'rgba(255, 255, 255)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});



