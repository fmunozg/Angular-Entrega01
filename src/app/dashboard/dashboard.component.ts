import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StudentsComponent } from "./students/students.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSidenavModule, StudentsComponent, MatToolbarModule, MatIconModule, SharedModule,MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  events: string[] = [];
  opened: boolean = false;
}
