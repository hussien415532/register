import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from 'src/app/registerationService/reg.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private api: RegService
  ) {}
  signup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],

  });
  submitForm() {
    let signupData = this.signup.value;
    this.api.register(signupData).subscribe({
      next: (d) => {
        console.log(d);
        this.route.navigate(['/login']);
      },
    });
  }

}
