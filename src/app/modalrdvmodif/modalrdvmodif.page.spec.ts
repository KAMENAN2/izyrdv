import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalrdvmodifPage } from './modalrdvmodif.page';

describe('ModalrdvmodifPage', () => {
  let component: ModalrdvmodifPage;
  let fixture: ComponentFixture<ModalrdvmodifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalrdvmodifPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalrdvmodifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
