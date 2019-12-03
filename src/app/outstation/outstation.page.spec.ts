import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstationPage } from './outstation.page';

describe('OutstationPage', () => {
  let component: OutstationPage;
  let fixture: ComponentFixture<OutstationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutstationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
