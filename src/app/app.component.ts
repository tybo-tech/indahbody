import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Order, Product } from './utils/email.model';
import { UxService } from './utils/ux.service';
import { filter, window } from 'rxjs/operators';
import { User } from 'src/models/user.model';
import { AccountService } from 'src/services/account.service';
import { ItemService } from 'src/services/item.service';
import { Item } from 'src/models/item.model';
import { COMPANYID, ITEM_TYPES } from './utils/constants';
import { ProductService } from './utils/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  order: Order;
  user: User;
  products: Product[];
  promotions: Item[];
  promotion: Item;
;
  toggle() { }
  constructor(
    private uxService: UxService,
    private router: Router,
    private accountService: AccountService,
    private itemService: ItemService,
    private productService: ProductService,
  ) {
    this.uxService.orderObservable.subscribe(data => {
      if (data) {
        this.order = data;
      } else {
        this.order = {
          Products: [],
          Total: 0,
          Name: '',
          Email: '',
          Phone: '',
          Address: '',
          Shipping: 'R100 Delivery',
          ShippingFee: 100
        };
      }
    })
  }
  checkout() {
    this.router.navigate(['/checkout'])
  }
  login() {
    this.router.navigate(['/login'])
  }
  profile() {
    this.router.navigate(['/profile'])
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (document.querySelector('.main-container')) {
        document.querySelector('.main-container').scrollTop = 0;
      }
    });

    this.accountService.user.subscribe(data => {
      this.user = data;
    });

    this.itemService.getProductItems();
    this.getPromotions();
  }

  getPromotions() {
    this.itemService.getItems(COMPANYID, ITEM_TYPES.PROMOTION.Name).subscribe(data => {
      this.promotions = data || [];
      this.promotions = this.promotions.filter(x => x.ItemStatus === 'Active');
      if (this.promotions.length) {
        this.promotion = this.promotions[0];
      }
    });
  }

  open(url) {
    this.router.navigate([`/${url}`])

  }
  

}
