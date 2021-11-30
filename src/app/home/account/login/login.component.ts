import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;
  message: string;
  returnUrl: any;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {

    this.activatedRoute.params.subscribe(r => {
      this.returnUrl = r.id;
    });
  }

  ngOnInit() {
  }
  login() {
    this.error = ''
    this.accountService.login({ email: this.email, password: this.password }).subscribe(data => {
      console.log(data);
      if (data && data.UserId) {
        this.accountService.updateUserState(data);
        if (this.returnUrl)
          this.router.navigate([`/${this.returnUrl}`])
        this.message = 'Login successfully.';

        // this.router.navigate(['/dashboard']);
      } else {
        this.accountService.updateUserState(null);
        this.error = 'Opps wrong login details'
      }

    })
  }
  back() {
    this.router.navigate([``]);
  }
}
