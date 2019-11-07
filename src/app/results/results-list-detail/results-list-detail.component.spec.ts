import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListDetailComponent } from './results-list-detail.component';

describe('ResultsListDetailComponent', () => {
  let component: ResultsListDetailComponent;
  let fixture: ComponentFixture<ResultsListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
