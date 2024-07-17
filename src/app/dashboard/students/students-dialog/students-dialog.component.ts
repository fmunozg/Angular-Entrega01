import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { student } from '../models';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-students-dialog',
  standalone: true,
  imports: [MatDialogModule,MatFormField,MatLabel,MatError,ReactiveFormsModule,MatButtonModule],
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss'
})
export class StudentsDialogComponent {

  studentForm: FormGroup;
  dialogTitle: string;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private studentData?: student
  ) {
    this.studentForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required]
    });

    this.dialogTitle = this.studentData ? 'Editar Estudiante' : 'Agregar Nuevo Estudiante';

    if(this.studentData){
      this.studentForm.patchValue(this.studentData);
    }

  }
  onSubmit():void {
    this.dialogRef.close(this.studentForm.value)
  }

  onCancel(){
    this.dialogRef.close();
  }
}
