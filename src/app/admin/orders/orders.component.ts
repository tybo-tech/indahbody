import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  user: User;

  constructor(
    private accountService: AccountService,private router: Router
  ) { }

  ngOnInit() {
    this.accountService.user.subscribe(data => {
      this.user = data;
      if (!this.user || this.user.UserType !== 'Admin') {
        this.router.navigate([`/login/orders`])
      }
    });
  }

}
