import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder,} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SweetAlertService } from '../shared/services/sweet-alert.service';



@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export default class ContactPageComponent {
  private readonly fb = inject(FormBuilder)
  private readonly alert = inject(SweetAlertService);

  readonly signUpForm =this.fb.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(16),
    ]),
    lastName: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(16),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  })
 emailSend(){
  emailjs.init('M6lXw60kHrTBq4rzm')
  if(this.signUpForm.valid){
       emailjs.send("service_6maur7m","template_skrl3dc",{
      from_name: this.signUpForm.value.firstName,
      Last_name: this.signUpForm.value.lastName,
      reply_to: this.signUpForm.value.email,
      user_mobile: this.signUpForm.value.phone,
      message: this.signUpForm.value.description,
      });
    this.alert.alert('Email Sent !', 'success', 'We will contact you soon !')
  }else{
    this.alert.alert('Check inputs', 'error', 'there is possibilty that input is not valid')
  }
}
}

