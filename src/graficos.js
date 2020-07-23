import {
    obtenerTipos, filtrarPorTipo, 
  }
    from './data.js';
import data from './data/pokemon/pokemon.js';

const ctx = document.getElementById('myChart').getContext('2d');
const arregloPoke = obtenerTipos(data.pokemon);
const arregloTipo = arregloPoke.map(tipo => filtrarPorTipo(tipo, data.pokemon).length);
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