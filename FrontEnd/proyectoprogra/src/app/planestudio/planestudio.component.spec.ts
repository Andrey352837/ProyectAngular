import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanestudioComponent } from './planestudio.component';

describe('PlanestudioComponent', () => {
  let component: PlanestudioComponent;
  let fixture: ComponentFixture<PlanestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanestudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
