import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ORDER } from './constants';
import { Order } from './email.model';
import { NavHistoryUX, HomeNavUx, LoaderUx } from './UxModel.model';

@Injectable({
  providedIn: 'root'
})


export class UxService {


  private uxMessagePopBehaviorSubject: BehaviorSubject<string>;
  public uxMessagePopObservable: Observable<string>;

  private uxNavHistoryBehaviorSubject: BehaviorSubject<NavHistoryUX>;
  public uxNavHistoryObservable: Observable<NavHistoryUX>;

  private navBarLogoBehaviorSubject: BehaviorSubject<HomeNavUx>;
  public navBarLogoObservable: Observable<HomeNavUx>;

  private showIntroPageBehaviorSubject: BehaviorSubject<string>;
  public showIntroPageObservable: Observable<string>;

  private uxLoadingBehaviorSubject: BehaviorSubject<LoaderUx>;
  public uxLoadingPopObservable: Observable<LoaderUx>;

  private uxHomeSideNavBehaviorSubject: BehaviorSubject<boolean>;
  public uxHomeSideNavObservable: Observable<boolean>;

  private orderBehaviorSubject: BehaviorSubject<Order>;
  public orderObservable: Observable<Order>;


  private pageYPositionBehaviorSubject: BehaviorSubject<number>;
  public pageYPositionObservable: Observable<number>;

  constructor() {
    this.uxMessagePopBehaviorSubject = new BehaviorSubject<string>(null);
    this.uxMessagePopObservable = this.uxMessagePopBehaviorSubject.asObservable();

    this.uxLoadingBehaviorSubject = new BehaviorSubject<LoaderUx>(null);
    this.uxLoadingPopObservable = this.uxLoadingBehaviorSubject.asObservable();

    this.navBarLogoBehaviorSubject = new BehaviorSubject<HomeNavUx>(JSON.parse(localStorage.getItem('HomeNavUx')));
    this.navBarLogoObservable = this.navBarLogoBehaviorSubject.asObservable();

    this.showIntroPageBehaviorSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('ShowIntroPage')));
    this.showIntroPageObservable = this.showIntroPageBehaviorSubject.asObservable();


    this.uxNavHistoryBehaviorSubject = new BehaviorSubject<NavHistoryUX>(null);
    this.uxNavHistoryObservable = this.uxNavHistoryBehaviorSubject.asObservable();


    this.uxHomeSideNavBehaviorSubject = new BehaviorSubject<boolean>(null);
    this.uxHomeSideNavObservable = this.uxHomeSideNavBehaviorSubject.asObservable();


    this.pageYPositionBehaviorSubject = new BehaviorSubject<number>(null);
    this.pageYPositionObservable = this.pageYPositionBehaviorSubject.asObservable();

    this.orderBehaviorSubject = new BehaviorSubject<Order>(localStorage.getItem(ORDER) ? JSON.parse(localStorage.getItem(ORDER)) : null);
    this.orderObservable = this.orderBehaviorSubject.asObservable();

  }

  public get currentMessagePopValue(): string {
    return this.uxMessagePopBehaviorSubject.value;
  }
  public get currentOrderValue(): Order {
    return this.orderBehaviorSubject.value;
  }

  public get currentNavBarLogoValue(): HomeNavUx {
    return this.navBarLogoBehaviorSubject.value;
  }

  updatePageYPositionState(state: number) {
    if (state) {
      this.pageYPositionBehaviorSubject.next(state);
    }
  }
  updateMessagePopState(state: string) {
    if (state) {
      this.uxMessagePopBehaviorSubject.next(state);
    }
  }
  updateNavBarLogoState(state: HomeNavUx) {
    if (state) {
      this.navBarLogoBehaviorSubject.next(state);
      localStorage.setItem('HomeNavUx', JSON.stringify(state));
    }
  }
  updateOrderState(state: Order) {
    if (state) {
      this.orderBehaviorSubject.next(state);
      localStorage.setItem(ORDER, JSON.stringify(state));
    }
  }
  updateLoadingState(state: LoaderUx) {
    if (state) {
      this.uxLoadingBehaviorSubject.next(state);
    }
  }

  hideLoader() {
    this.uxLoadingBehaviorSubject.next({ Loading: false, Message: undefined });
  }
  showLoader() {
    this.uxLoadingBehaviorSubject.next(({ Loading: true, Message: 'Loading, please wait.' }));
  }
  hideHomeSideNav() {
    this.uxHomeSideNavBehaviorSubject.next(false);
  }
  showHomeSideNav() {
    this.uxLoadingBehaviorSubject.next(({ Loading: true, Message: 'Loading, please wait.' }));
  }
  keepNavHistory(item: NavHistoryUX) {
    this.uxNavHistoryBehaviorSubject.next(item);
  }
  updateShowIntroPageState(state: string) {
    this.showIntroPageBehaviorSubject.next(state);
    localStorage.setItem('ShowIntroPage', JSON.stringify(state));
  }


  getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
}

