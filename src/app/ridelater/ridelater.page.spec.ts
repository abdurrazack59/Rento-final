import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidelaterPage } from './ridelater.page';

describe('RidelaterPage', () => {
  let component: RidelaterPage;
  let fixture: ComponentFixture<RidelaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidelaterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidelaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
