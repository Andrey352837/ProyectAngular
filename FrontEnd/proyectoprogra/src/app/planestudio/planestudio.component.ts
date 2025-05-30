import { Component, signal } from '@angular/core';
import { PlanEstudios } from '../../model/planestudio';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planestudio',
  imports: [],
  templateUrl: './planestudio.component.html',
  styleUrl: './planestudio.component.css'
})
export class PlanestudioComponent {
  public planesEstudio = signal<PlanEstudios[]>([]);

  constructor(private http: HttpClient) {
      this.obtenerPlanesEstudio();
  }

  public obtenerPlanesEstudio() {
      this.http.get('http://localhost/planestudios').subscribe((planes) => {
          const arr = planes as PlanEstudios[];
          arr.forEach((plan) => {
              this.agregarPlanSenial(plan);
          });
          console.log(typeof arr);
      });
  }

  public agregarPlanEstudio(event: Event) {
      let tag = event.target as HTMLInputElement;
      let nuevoPlan: PlanEstudios = {
          nombre: tag.value,
          anno: new Date().getFullYear(),
          id_carrera: 0
      };
      this.http.post('http://localhost/planestudios', nuevoPlan).subscribe(() => {
          this.planesEstudio.update((planes) => [...planes, nuevoPlan]);
      });
  }

  public agregarPlanSenial(plan: PlanEstudios) {
      this.planesEstudio.update((planes) => [...planes, plan]);
  }

  public modificarPlanEstudio(id: number, event: Event) {
      let tag = event.target as HTMLInputElement;
      let cuerpo = { nombre: tag.value };
      this.http.put(`http://localhost/planestudios/${id}`, cuerpo).subscribe(() => {
          this.planesEstudio.update((planes) => {
              return planes.map((plan) => {
                  if (plan.id === id) {
                      return { ...plan, ...cuerpo };
                  }
                  return plan;
              });
          });
      });
  }

  public borrarPlanEstudio(id: number) {
      this.http.delete(`http://localhost/planestudios/${id}`).subscribe(() => {
          this.planesEstudio.update((planes) => planes.filter((plan) => plan.id !== id));
      });
  }
}
