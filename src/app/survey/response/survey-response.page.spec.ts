import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyResponsePage } from './survey-response.page';

describe('SurveyResponsePage', () => {
  let component: SurveyResponsePage;
  let fixture: ComponentFixture<SurveyResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyResponsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
