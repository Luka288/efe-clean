import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder,} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export default class ContactPageComponent {

}
