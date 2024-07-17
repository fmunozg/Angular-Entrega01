import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { student } from './models';
import { SharedModule } from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './students-dialog/students-dialog.component';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-students',
  standalone: true,
  imports: [MatTableModule,SharedModule,MatIconModule,StudentsDialogComponent,MatButtonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['id', 'name', 'course','actions'];
  dataSource: student[] = [
    { id: 1, nombre: 'Felipe', apellido: 'Muñoz', curso: 'Angular' },
    { id: 2, nombre: 'María', apellido: 'González', curso: 'React' },
    { id: 3, nombre: 'Juan', apellido: 'Pérez', curso: 'Vue' },
    { id: 4, nombre: 'Ana', apellido: 'López', curso: 'Node.js' },
    { id: 5, nombre: 'Carlos', apellido: 'Hernández', curso: 'Python' },
    { id: 6, nombre: 'Luisa', apellido: 'Martínez', curso: 'Django' },
    { id: 7, nombre: 'Pedro', apellido: 'Rodríguez', curso: 'Java' },
    { id: 8, nombre: 'Marta', apellido: 'García', curso: 'Spring' },
    { id: 9, nombre: 'Sofía', apellido: 'Fernández', curso: 'C#' },
    { id: 10, nombre: 'Diego', apellido: 'Ruiz', curso: 'ASP.NET' }
  ];
  

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentsDialogComponent, {
      data: { students: this.dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result['id'] = this.dataSource.length + 1;
        this.dataSource = [...this.dataSource, result]
      }
    });
  }

  editStudent(studentData: student){
    this.dialog.open(StudentsDialogComponent,{data: studentData}).afterClosed().subscribe({
      next:(value) => {
        if(!!value){
          this.dataSource = this.dataSource.map((el)=> el.id == studentData.id ? value : el);
        }
      }
    });
  }

  deleteStudentByID(id:number){
    if(confirm('Está Seguro?')){
      this.dataSource = this.dataSource.filter((el)=> el.id != id)
    }
  }
}
