import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaacademicaComponent } from './ofertaacademica.component';

describe('OfertaacademicaComponent', () => {
  let component: OfertaacademicaComponent;
  let fixture: ComponentFixture<OfertaacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertaacademicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertaacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
