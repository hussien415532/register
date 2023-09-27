import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from 'src/app/registerationService/reg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
  });
  constructor(public fb: FormBuilder, private route: Router,private api:RegService) {}
  submitForm() {
    let loginData = this.login.value;
    this.api.login(loginData).subscribe({
      next:(d:any)=>{
        localStorage.setItem('auth',d.token)
        this.route.navigate(['/home'])
      }
    })
  }
}
