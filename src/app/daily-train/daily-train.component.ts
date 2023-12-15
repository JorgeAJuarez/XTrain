import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-daily-train',
  templateUrl: './daily-train.component.html',
  styleUrls: ['./daily-train.component.scss']
})
export class DailyTrainComponent {
  public chart: any;
  public chart2: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    Chart.defaults.color = 'white';
    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Sogui',
          'Maki',
          'Jireugi'
        ],
        datasets: [{
          label: 'Set del Dia',
          data: [1, 1, 2],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            position: 'right', // Posiciona la leyenda a la derecha
            align: 'start',     // Alinea los ítems al inicio (opcional)
            labels: {
              boxWidth: 40,   // Ancho del cuadro de color de la leyenda
              padding: 20     // Espaciado entre cada ítem de la leyenda
            }
          }
        }
      }
    });
    this.chart2 = new Chart("MyChart2", {
      type: 'doughnut',
      data: {
        labels: [
          'Principiante',
          'Avanzado',
          'Experto'
        ],
        datasets: [{
          label: 'Nivel del dia',
          data: [1, 1, 2],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            position: 'right', // Posiciona la leyenda a la derecha
            align: 'start',     // Alinea los ítems al inicio (opcional)
            labels: {
              boxWidth: 40,   // Ancho del cuadro de color de la leyenda
              padding: 20     // Espaciado entre cada ítem de la leyenda
            }
          }
        }
      }
    });
  }
}



