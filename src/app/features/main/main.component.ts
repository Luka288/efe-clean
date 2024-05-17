import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatGridListModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export default class MainComponent {
  
}
