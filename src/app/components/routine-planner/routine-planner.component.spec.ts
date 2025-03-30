import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinePlannerComponent } from './routine-planner.component';

describe('RoutinePlannerComponent', () => {
  let component: RoutinePlannerComponent;
  let fixture: ComponentFixture<RoutinePlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutinePlannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutinePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
