/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CatergoryComponent } from './catergory.component';

describe('CatergoryComponent', () => {
  let component: CatergoryComponent;
  let fixture: ComponentFixture<CatergoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatergoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
