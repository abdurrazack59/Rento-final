import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfdrivePage } from './selfdrive.page';

describe('SelfdrivePage', () => {
  let component: SelfdrivePage;
  let fixture: ComponentFixture<SelfdrivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfdrivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfdrivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
