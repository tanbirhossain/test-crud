import { User } from './../../../models/user';
import { Validators } from '@angular/forms';
import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: any;
  message: string;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }

  ngOnInit() {
    this.createFrom();
  }

  createFrom() {
    this.angForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onFormSubmit() {

     this.LoginUserAccount(this.angForm.value);

  }

  LoginUserAccount(user: User){
    this.accountService.signInAccount(user).subscribe(
      (result: any) => {
          console.log("login");
          localStorage.setItem('userAccessToken', result.accessToken);
          localStorage.setItem('userRefreshToken', result.refreshToken);
          this.router.navigate(['/employee/list']);
      },
      (err : HttpErrorResponse)=>{
        console.log(err.error.message);
        this.message = err.error.message;
      });
  }

}
