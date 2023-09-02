import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserInfo } from 'src/app/models/loginInfo';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  userInfo: IUserInfo = {
    userEmail: '',
    password: ''
  }

  constructor(private formBuilder: FormBuilder,
          private authService: AuthService,
          private router: Router,
          private localService: LocalStorageService) {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const val = this.loginForm.value;
    if (val.userid && val.password) {
      this.userInfo = {
        userEmail: val.userid,
        password: val.password
      }
      this.authService.login(this.userInfo).subscribe((res) => {
        this.localService.setJwtToken(res);
        console.log('user login successfully');
        this.router.navigateByUrl('/createArticle');
      })
    }
  }
}
