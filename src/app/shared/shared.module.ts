import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './pipes/fullname.pipe';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FullnamePipe,
    MatIconModule
  ],
  exports: [FullnamePipe]
})
export class SharedModule { }
