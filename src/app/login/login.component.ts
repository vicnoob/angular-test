import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username = 'eve.holt@reqres.in';
  private password = '';
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    const user = new User(this.username, this.password);
    this.authenticationService.doLogin(user).subscribe(res => {
      console.log('done', res)
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }

}
