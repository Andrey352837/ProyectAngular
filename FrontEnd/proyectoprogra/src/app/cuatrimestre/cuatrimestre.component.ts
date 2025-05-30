import { Component, signal } from '@angular/core';
import { Cuatrimestre } from '../../model/cuatrimestre';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cuatrimestre',
  imports: [],
  templateUrl: './cuatrimestre.component.html',
  styleUrl: './cuatrimestre.component.css'
})
export class CuatrimestreComponent {
  public cuatrimestres = signal<Cuatrimestre[]>([]);

  constructor(private http: HttpClient) {
      this.obtenerCuatrimestres();
  }

  public obtenerCuatrimestres() {
      this.http.get('http://localhost/cuatrimestre').subscribe((cuatrimestres) => {
          const arr = cuatrimestres as Cuatrimestre[];
          arr.forEach((cuatrimestre) => {
              this.agregarCuatrimestreSenial(cuatrimestre);
          });
          console.log(typeof arr);
      });
  }

  public agregarCuatrimestre(event: Event) {
      let tag = event.target as HTMLInputElement;
      let nuevoCuatrimestre: Cuatrimestre = {
          numero_cuatrimestre: parseInt(tag.value),
          anno: new Date().getFullYear()
      };
      this.http.post('http://localhost/cuatrimestre', nuevoCuatrimestre).subscribe(() => {
          this.cuatrimestres.update((cuatrimestres) => [...cuatrimestres, nuevoCuatrimestre]);
      });
  }

  public agregarCuatrimestreSenial(cuatrimestre: Cuatrimestre) {
      this.cuatrimestres.update((cuatrimestres) => [...cuatrimestres, cuatrimestre]);
  }

  public modificarCuatrimestre(id: number, event: Event) {
      let tag = event.target as HTMLInputElement;
      let cuerpo = { numero_cuatrimestre: parseInt(tag.value) };
      this.http.put(`http://localhost/cuatrimestre/${id}`, cuerpo).subscribe(() => {
          this.cuatrimestres.update((cuatrimestres) => {
              return cuatrimestres.map((cuatrimestre) => {
                  if (cuatrimestre.id === id) {
                      return { ...cuatrimestre, ...cuerpo };
                  }
                  return cuatrimestre;
              });
          });
      });
  }

  public borrarCuatrimestre(id: number) {
      this.http.delete(`http://localhost/cuatrimestre/${id}`).subscribe(() => {
          this.cuatrimestres.update((cuatrimestres) => cuatrimestres.filter((cuatrimestre) => cuatrimestre.id !== id));
      });
  }
}
