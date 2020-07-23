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
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235,)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(54, 162, 235)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
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



