import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckrdvPage } from './checkrdv.page';

describe('CheckrdvPage', () => {
  let component: CheckrdvPage;
  let fixture: ComponentFixture<CheckrdvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckrdvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckrdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
