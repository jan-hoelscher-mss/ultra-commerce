import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  // @ts-ignore
  form: FormGroup;
  loginInvalid: boolean = false;
  loading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    authService.isLoggedIn().subscribe(isLoggedIn => {
      this.router.navigate(['products']);
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if(this.form.valid){
      this.loading = true;
      this.authService.login(
        // @ts-ignore
        this.form.get('username').value,
        // @ts-ignore
        this.form.get('password').value,
      ).subscribe( result => {
          this.loading = false;
          this.router.navigate(['products']);
        },
        () => {
          this.loading = false;
          this.loginInvalid = true;
        }
      )
    }
  }
}
