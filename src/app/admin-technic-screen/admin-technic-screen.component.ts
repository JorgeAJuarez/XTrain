import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Technic } from '../train-model';
import { TechnicDialogComponent } from './technic-dialog.component';


const ELEMENT_DATA: Technic[] = [
  { name: 'Impact Trueno', level: 'Easy', type: 'Electrico', explanation: "", sample: "" }
];

@Component({
  selector: 'app-admin-technic-screen',
  templateUrl: './admin-technic-screen.component.html',
  styleUrls: ['./admin-technic-screen.component.scss']
})
export class AdminTechnicScreenComponent {
  displayedColumns: string[] = ['nombre', 'nivel', 'tipo', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(TechnicDialogComponent, {
      width: '250px'
    });
  }
  // Método para aplicar filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
