import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMPANY_EMIAL } from 'src/app/utils/constants';
import { Email, Order } from 'src/app/utils/email.model';
import { EmailService } from 'src/app/utils/email.service';
import { UxService } from 'src/app/utils/ux.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  // <app-add-customer [user]="user">
  name;
  surname;
  email;
  massage = '';
  phone;
  address;
  order: Order;
  productDescription
  showLoader;
  sent: boolean;
  isFreeDelivery: boolean = true;
  merchantId = '16505769';
  merchantKey = 'gtt3hsaryfas3';
  shopingSuccesfulUrl: string;
  companyId: any;
  paymentCancelledUrl: string;
  paymentCallbackUrl: string;
  orderTable: string;
  randNumber: number;
  constructor(
    private emailService: EmailService,
    private router: Router,
    private uxService: UxService,
  ) { }

  ngOnInit() {
    this.uxService.orderObservable.subscribe(data => {
      if (data) {
        this.order = data;
      } else {
        this.back();
      }
    });
    window.scroll(0, 0);
    this.shopingSuccesfulUrl = `${environment.BASE_URL}/done`;
    this.paymentCancelledUrl = `${environment.BASE_URL}/checkout`;
    this.paymentCallbackUrl = this.shopingSuccesfulUrl;
    this.randNumber = this.uxService.getRandomNumberBetween(2, 99999);
  }

  rem(item, index) {
    if (item && index > -1) {
      this.order.Products.splice(index, 1);
      this.getTotal();
    }
  }
  back() {
    this.router.navigate([``]);
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



  sendEmail() {
    this.productDescription = '';
    this.order.Total = this.order.Total + (this.order.ShippingFee || 0);
    this.orderTable = `<h3>Order details #${this.randNumber}</h3>
    <h4>Total: R${this.order.Total}</h4>
    `;
    this.orderTable += `
   
<table style='width: 100%; border: 1px solid rgb(139, 139, 139);border-collapse: collapse;'>
<th style='border: 1px solid rgb(139, 139, 139);text-align: left; padding: 1em'>
  Product
</th>
<th style='border: 1px solid rgb(139, 139, 139);text-align: left;  padding: 1em;'>
Quantity & Price 
</th>

<tr style="padding: 1em;">
    `;
    this.order.Products.forEach(product => {
      this.orderTable += ` <tr style="padding: 1em; border: 1px solid rgb(139, 139, 139);">
      <td style="padding: 1em; border: 1px solid rgb(139, 139, 139);">`
      this.orderTable += `${product.Name} (R${product.Price} each)  </td>`;

      this.orderTable += ` <td style="padding: 1em; border: 1px solid rgb(139, 139, 139);">${product.Quantity} X R${Number(product.Quantity) * Number(product.Price)} </td>`

      this.orderTable += `
      </tr>
      `;

    });
    this.orderTable += `<tr><td style="padding: 1em;"  border: 1px solid rgb(139, 139, 139);><b>${this.order.Shipping}</b></td>
    <td style="padding: 1em;"></td>
    </tr>`;
    this.orderTable += `
    </table>
    `;
    const emailToSend: Email = {
      From: this.email,
      Email: COMPANY_EMIAL,
      Subject: this.name + ' Order',
      Message: `<br>${this.orderTable} <br> <hr> ${this.massage}   <br> Name: ${this.name} <br> Email:  ${this.email} <br> Phone:  ${this.phone} <br> Address: ${this.address}`,
      UserFullName: 'Indabod Team'
    };
    this.showLoader = true;
    this.emailService.sendGeneralTextEmail(emailToSend)
      .subscribe(response => {
        if (response > 0) {
          this.sent = true;
          this.order.Products.forEach(x => {
            this.productDescription += `${x.Name} | `;
          })

          //Thank you for contacting us we will reply as soon as possible
        }
      });

  }


  payEft() {
    const mess = `
    <div style="text-align: left; padding: 1em 0;">
  <img src="https://indahbody.africa/assets/images/logo.png" style="width: 12em;" alt="">
</div>
    Hi ${this.name} <br>

    
    <p>
    <br>
    <b><u>Please make a payment  to banking details below,  <br>
    and send a proof of payment to <a href="mailto:support@indahbody.africa"> support@indahbody.africa</a>
    .</u></b> <br> <br>
    
    Account holder:<b> Bpm Group (pty) </b> <br>
    LtdBank: <b>FNB</b> <br>
    Account: <b>62796894296</b> <br>
    Reference: <b>#${this.randNumber}</b> <br>
    </p>
    
    <hr>
    
    
    ${this.orderTable}

    <div style="text-align: left; padding: 1em; background: rgb(231, 231, 231); margin: 1em 0;">
<h3 style="margin: .5em 0;">
  For more infomation email <br> <a href="mailto:support@indahbody.africa">support@indahbody.africa</a> <br><br>
  Thank you
</h3>
</div>
    `
    const customerEmail: Email = {
      From: COMPANY_EMIAL,
      Email: this.email,
      Subject: `Your order was successful #${this.randNumber}`,
      Message: `${mess}`,
      UserFullName: 'Indabody Team'
    };
    this.emailService.sendGeneralTextEmail(customerEmail)
      .subscribe(response => {
        this.order.Products = [];
        this.getTotal();
        this.router.navigate([`done`]);
        if (response > 0) {
          console.log(`EMail sent to customer`);

        }
      });
  }

}
