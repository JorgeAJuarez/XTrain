import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumn } from '../train-model';
import { AlumnoDialogComponent } from './alumno-dialog.component';


const ELEMENT_DATA: Alumn[] = [
  { id: 1, name: 'Fulanito de tal', level: 'Inicial', teacher: 'Sultanito de cuál', trains: [] }
];

@Component({
  selector: 'app-admin-alumn-screen',
  templateUrl: './admin-alumn-screen.component.html',
  styleUrls: ['./admin-alumn-screen.component.scss']
})
export class AdminAlumnScreenComponent {
  displayedColumns: string[] = ['nombre', 'nivel', 'maestro', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(AlumnoDialogComponent, {
      width: '250px'
    });
  }
  // Método para aplicar filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


