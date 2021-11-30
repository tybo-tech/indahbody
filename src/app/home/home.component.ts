import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  SKIN_TYPES } from '../utils/constants';
import { ProductService } from '../utils/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slide = 1;
  thisClass = 'rigth';
  maxSlideNumber = 3;
  interval: any;
  lastSkinType = {
    Id: 'Combination-Skin',
    Name: 'Combination   Skin',
    Description: `
    Combination Skin Type
Your skin can be dry or normal in some areas
 and oily in others, such as the T-zone (nose, forehead, and chin).
  Many people have this type. It may need slightly different care in different areas.
\n

  Combination skin can have:

  Pores that look larger than normal, because they’re more open
  Blackheads
  Shiny skin
      `,
    Icon: 'assets/images/comp.png'
  }
  constructor(
    private router: Router  ) {

  }

  skinTypes = SKIN_TYPES;
  ngOnInit() {
    this.interval = setInterval(() => {
      this.doSlide();
    }, 7000);
    this.skinTypes = this.skinTypes.filter(x => !x.Hided)
  }
  changeSlide(i: number) {


    if ((this.slide + i) > this.maxSlideNumber) {
      this.slide = 1;
      return;
    }
    if ((this.slide + i) < 1) {
      this.slide = this.maxSlideNumber;
      return;
    }
    this.slide += i;

    if (i == 1) {
      this.thisClass = 'rigth';
    }
    if (i == -1) {
      this.thisClass = 'left';
    }
  }

  goto(service) {
    if (document.querySelector('.main-container')) {
      document.querySelector('.main-container').scrollTop = 0;
    }
    this.router.navigate([service]);
  }

  doSlide() {
    if (this.slide < 3) {
      this.slide++;
    } else {
      this.slide = 1;
    }
  }
}
