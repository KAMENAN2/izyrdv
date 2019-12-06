import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRdvPage } from './list-rdv.page';

describe('ListRdvPage', () => {
  let component: ListRdvPage;
  let fixture: ComponentFixture<ListRdvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRdvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
