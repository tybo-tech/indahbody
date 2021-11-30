import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './admin/customers/customers.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PromotionComponent } from './admin/promotions/promotion/promotion.component';
import { PromotionsComponent } from './admin/promotions/promotions.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/account/login/login.component';
import { ProfileComponent } from './home/account/profile/profile.component';
import { ContactComponent } from './home/contact/contact.component';
import { DisclaimerComponent } from './home/disclaimer/disclaimer.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageWidgetComponent } from './home/image-widget/image-widget.component';
import { AddProductComponent } from './home/products/add-product/add-product.component';
import { CatergoryComponent } from './home/products/catergory/catergory.component';
import { CheckoutComponent } from './home/products/checkout/checkout.component';
import { OrderSucessfylComponent } from './home/products/checkout/order-sucessfyl/order-sucessfyl.component';
import { ProductsComponent } from './home/products/products.component';
import { ShopPromotionsComponent } from './home/products/shop-promotions/shop-promotions.component';
import { ReturnsPolicyComponent } from './home/returns-policy/returns-policy.component';
import { ShippingPolicyComponent } from './home/shipping-policy/shipping-policy.component';
import { TermsComponent } from './home/terms/terms.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'returns-policy', component: ReturnsPolicyComponent },
  { path: 'shipping-policy', component: ShippingPolicyComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'done', component: OrderSucessfylComponent },
  { path: 'done', component: OrderSucessfylComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'product/:id', component: AddProductComponent },
  { path: 'category/:id', component: CatergoryComponent },
  { path: 'promotion/:id', component: PromotionComponent },
  { path: 'shop-promotions', component: ShopPromotionsComponent },
];

export const routers = [
  HomeComponent,
  ProductsComponent,
  ContactComponent,
  AboutComponent,
  CheckoutComponent,
  CatergoryComponent,
  FooterComponent,
  TermsComponent,
  ReturnsPolicyComponent,
  OrderSucessfylComponent,
  ShippingPolicyComponent,
  DisclaimerComponent,
  AddProductComponent,
  FeedbackComponent,
  ImageWidgetComponent,
  LoginComponent,
  ProfileComponent,
  PromotionsComponent,
  OrdersComponent,
  CustomersComponent,
  PromotionComponent,
  ShopPromotionsComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
