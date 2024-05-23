import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder,} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { first } from 'rxjs';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export default class ContactPageComponent {
  private readonly fb = inject(FormBuilder)

  readonly signUpForm =this.fb.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(16),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
}

