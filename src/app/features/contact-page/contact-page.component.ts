import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder,} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Target } from '@angular/compiler';



@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export default class ContactPageComponent {
  private readonly fb = inject(FormBuilder)

  private readonly userID = 'M6lXw60kHrTBq4rzm'

  readonly signUpForm =this.fb.group({
    firstName: new FormControl('asdasd', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(16),
    ]),
    email: new FormControl('asdasd@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl('12312321', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('test test test', [
      Validators.required,
      Validators.minLength(10)
    ])
  })


  

  // !! finding way to send email working on it ! 

  // emailService(event: SubmitEvent){
  //   event.preventDefault();
  //   if(this.signUpForm.valid){
  //     const values = {
  //       firstName: this.signUpForm.get('firstName')?.value,
  //       email: this.signUpForm.get('email')?.value,
  //       phone: this.signUpForm.get('phone')?.value,
  //       description: this.signUpForm.get("description")?.value
  //     }

  //     emailjs
  //     .send('service_j8gjr1z', 'template_skrl3dc', values, this.userID)
  //     .then(
  //       () => {
  //         console.log(this.signUpForm.value)
  //         console.log('SUCCESS!',);
  //       },
  //       (error) => {
  //         console.log('FAILED...', (error as EmailJSResponseStatus).text);
  //       },
  //     );
  
  //   }
  // }
}

