import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../services/authApi/auth-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [AuthApiService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  @Input() submit = (form: FormGroup) => {};
  confirmedPassword: boolean = false;
  confirmedSubmit: boolean = false;

  form: FormGroup;

  constructor( private authApiService: AuthApiService ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl(''), 
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.maxLength(11)]), 
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
      confirmTerms: new FormControl('', [Validators.requiredTrue]),
      profile: new FormControl(1),
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(values => {
      this.confirmedPassword = this.passwordMismatch(values.password, values.confirmPassword);

      this.confirmedSubmit = this.permittedSubmit(values);
    });
  }

  insertUser() { 
    const data = this.form.value;
    data.phone = data.phone.toString();
    data.username = data.name.split(' ')[0] + data.phone;

    try {
      if(data) {
        this.authApiService.insertUser(data).subscribe((response) => {
          if (response) {
            console.log(response)
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  passwordMismatch(password: string, confirmPassword: string) {
    if (password === confirmPassword || confirmPassword === '') {
     return true;
    }
    return false;
  }

  permittedSubmit(values: any): boolean {
    if (values.name !== '' && values.email !== '' && values.phone !== '' && values.confirmTerms === true) {
      return true;
    }
    return false;
  }

}
