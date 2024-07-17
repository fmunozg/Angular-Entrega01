import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

}
