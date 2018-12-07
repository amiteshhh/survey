import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCreatePage } from './survey-create.page';

describe('SurveyCreatePage', () => {
  let component: SurveyCreatePage;
  let fixture: ComponentFixture<SurveyCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
