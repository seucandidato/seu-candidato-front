import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../services/authApi/auth-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastComponent } from '../../components/toast/toast.component';
import { DataToast } from '../../services/interfaces/dataToast';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, ToastComponent],
  providers: [AuthApiService, AuthService],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() submit = (form: FormGroup) => {};
  toast!: DataToast;
  confirmedLogin: boolean = false;

  form: FormGroup;

  constructor(
    private authApiService: AuthApiService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(values => {
      this.confirmedLogin = this.permittedSubmit(values);
    });
    this.authService.loggedIn.subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigateByUrl('/cms').then(() => {
          window.location.reload();
        });
      }
    });
  }

  login() { 
    const data = this.form.value; 
    if (data) { 
        this.authApiService.login(data).subscribe((response) => { 
            if (response.error?.message) {
                this.toast = {title: response.error.error, message: response.error.message}; 
            } else { 
                if (response && response.access_token) { 
                    this.authService.login(response.access_token); 
                } 
            } 
        }); 
    } 
  }

  permittedSubmit(values: any): boolean {
    if (values.username !== '' && values.password !== '') {
      return true;
    }
    return false;
  }
}