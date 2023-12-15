import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  public features = [
    { titulo: 'Planificación Personalizada', icono: 'calendar_today' },
    { titulo: 'Análisis de Datos', icono: 'multiline_chart' },
    { titulo: 'Biblioteca de Ejercicios', icono: 'video_library' },
    { titulo: 'Seguimiento en Tiempo Real', icono: 'timeline' },
    { titulo: 'Feedback Automatizado', icono: 'feedback' },
  ]

}
