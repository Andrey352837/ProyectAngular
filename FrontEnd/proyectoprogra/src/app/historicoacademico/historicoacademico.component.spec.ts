import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoacademicoComponent } from './historicoacademico.component';

describe('HistoricoacademicoComponent', () => {
  let component: HistoricoacademicoComponent;
  let fixture: ComponentFixture<HistoricoacademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoacademicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoacademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
