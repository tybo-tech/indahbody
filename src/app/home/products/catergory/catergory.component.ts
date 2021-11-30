import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ORDER, SKIN_TYPES } from 'src/app/utils/constants';
import { Order, Product } from 'src/app/utils/email.model';
import { ProductService } from 'src/app/utils/product.service';
import { UxService } from 'src/app/utils/ux.service';

@Component({
  selector: 'app-catergory',
  templateUrl: './catergory.component.html',
  styleUrls: ['./catergory.component.scss']
})
export class CatergoryComponent implements OnInit {
  skinTypes = SKIN_TYPES;
  products :Product[];
  id: any;
  item: any;
  order: Order;
  constructor(
    private activatedRoute: ActivatedRoute,
    private uxService: UxService,
    private router: Router,
    private productService: ProductService
  ) {
    this.activatedRoute.params.subscribe(r => {
      this.id = r.id;
      if (this.id) {
       this.filterProducts();
      }
    });
  }

  ngOnInit() {
    if (this.id) {
      this.item = this.skinTypes.find(x => x.Id === this.id)
    }



  }

  filterProducts(){
    this.productService.productObservable.subscribe(data=>{
      if(data && data.length){
        this.products = data.filter(x => x.Category.toLocaleLowerCase().includes(this.id.toLocaleLowerCase())
        || x.Category.toLocaleLowerCase().includes('all skin types'));
      }
    })
  }

  addToCart(item: Product) {
    if (localStorage.getItem(ORDER) && localStorage.getItem(ORDER) !== 'undefined') {
      this.order = JSON.parse(localStorage.getItem(ORDER));
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
      }
    }
    if (this.order && this.order.Products) {
      if (!this.order.Products.find(x => x.Name === item.Name)) {
        this.order.Products.push(item);
      }
      this.getTotal();
      this.router.navigate(['/checkout'])
    }

  }
  getTotal() {
    if (this.order && this.order.Products) {
      let tot = 0;

      this.order.Products.forEach(data => {
        tot += (Number(data.Price) * Number(data.Quantity));
      });
      this.order.Total = tot;
      this.uxService.updateOrderState(this.order);
    }

  }

}
