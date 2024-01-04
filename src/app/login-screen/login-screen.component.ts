import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AwsApiService } from '../aws-api.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: AwsApiService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario de inicio de sesión', this.loginForm.value);
      this.api.performAction("validate_user", this.loginForm.value).subscribe((token) => {
        localStorage.setItem('userToken', token);
      });
    }
  }
}
