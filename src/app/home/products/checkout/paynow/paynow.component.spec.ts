/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaynowComponent } from './paynow.component';

describe('PaynowComponent', () => {
  let component: PaynowComponent;
  let fixture: ComponentFixture<PaynowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaynowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
