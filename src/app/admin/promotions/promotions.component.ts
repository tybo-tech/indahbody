import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMPANYID, ITEM_TYPES } from 'src/app/utils/constants';
import { Item } from 'src/models/item.model';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  user: User;
  items: Item[] = [];

  constructor(
    private accountService: AccountService,
    private router: Router,
    private itemService: ItemService

  ) {
    this.getPromotions();
  }

  ngOnInit() {

    this.accountService.user.subscribe(data => {
      this.user = data;
      if (!this.user || this.user.UserType !== 'Admin') {
        this.router.navigate([`/login/promotions`])
      }
    });
  }
  getPromotions() {
    this.itemService.getItems(COMPANYID, ITEM_TYPES.PROMOTION.Name).subscribe(data => {
      this.items = data || [];
      this.items = this.items.filter(x => x.ItemStatus === 'Active')
    });
  }

  add(item: Item = null) {
    if (!item) {
      this.router.navigate(['/promotion/add']);
      return;
    }

    if (item) {
      this.router.navigate(['/promotion', item.ItemId]);
    }

  }
}
