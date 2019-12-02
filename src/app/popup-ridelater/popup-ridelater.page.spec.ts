import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRidelaterPage } from './popup-ridelater.page';

describe('PopupRidelaterPage', () => {
  let component: PopupRidelaterPage;
  let fixture: ComponentFixture<PopupRidelaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRidelaterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRidelaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
