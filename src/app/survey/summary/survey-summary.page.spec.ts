import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySummaryPage } from './survey-summary.page';

describe('SurveySummaryPage', () => {
  let component: SurveySummaryPage;
  let fixture: ComponentFixture<SurveySummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
