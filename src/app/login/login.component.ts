import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  invalidLogin = false
  
  @Input() error: string | null;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { } //we need to inject the auth service into the login component

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.userid, this.password).subscribe(
      data => {
        this.router.navigate(['empdash'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;

      }
    )
    );

  }

}