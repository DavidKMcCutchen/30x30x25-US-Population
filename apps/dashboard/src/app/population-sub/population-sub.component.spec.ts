import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationSubComponent } from './population-sub.component';

describe('PopulationSubComponent', () => {
  let component: PopulationSubComponent;
  let fixture: ComponentFixture<PopulationSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
