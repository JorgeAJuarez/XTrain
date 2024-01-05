import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumn } from '../train-model';
import { TeacherDialogComponent } from './teacher-dialog.component';

const ELEMENT_DATA: Alumn[] = [
  { id: 1, name: 'Fulanito de tal', level: 'Inicial', teacher: 'Sultanito de cuál', trains: [] }
];

@Component({
  selector: 'app-admin-teacher-screen',
  templateUrl: './admin-teacher-screen.component.html',
  styleUrls: ['./admin-teacher-screen.component.scss']
})
export class AdminTeacherScreenComponent {
  displayedColumns: string[] = ['nombre', 'maestro', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(TeacherDialogComponent, {
      width: '250px'
    });
  }
  // Método para aplicar filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
