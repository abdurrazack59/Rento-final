import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidenowPage } from './ridenow.page';

describe('RidenowPage', () => {
  let component: RidenowPage;
  let fixture: ComponentFixture<RidenowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidenowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidenowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
