import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../services/authApi/auth-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [AuthApiService, AuthService],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() submit = (form: FormGroup) => {};

  form: FormGroup;

  constructor(
    private authApiService: AuthApiService,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((loggedIn) => {
      if (loggedIn) {
        console.log(loggedIn);
        this.router.navigateByUrl('/cms').then(() => {
          window.location.reload();
        });
      }
    });
  }

  login() {
    const data = this.form.value;
    try {
      if (data) {
        this.authApiService.authApiService(data).subscribe((response) => {
          if (response && response.access_token) {
            this.authService.login(response.access_token);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}