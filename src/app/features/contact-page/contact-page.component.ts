import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export default class ContactPageComponent {

}
