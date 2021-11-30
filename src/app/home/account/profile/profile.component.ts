import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  message: string;
  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.accountService.user.subscribe(data => { this.user = data })

  }

  save() {
    this.userService.update(this.user).subscribe(data => {
      if (data && data.UserId) {
        this.accountService.updateUserState(data);
        this.message = 'Your profile  updated successfully.';
      }
    })
  }
  back() {
    this.router.navigate([``]);
  }
  logout() {
    this.accountService.logout();
  }
}
