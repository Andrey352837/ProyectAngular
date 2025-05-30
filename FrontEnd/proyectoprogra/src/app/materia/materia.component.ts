import { Component, signal } from '@angular/core';
import { Materia } from '../../model/materia';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-materia',
  imports: [],
  templateUrl: './materia.component.html',
  styleUrl: './materia.component.css'
})
export class MateriaComponent {
  public materias = signal<Materia[]>([]);

  constructor(private http: HttpClient) {
      this.obtenerMaterias();
  }

  public obtenerMaterias() {
      this.http.get('http://localhost/materia').subscribe((materias) => {
          const arr = materias as Materia[];
          arr.forEach((materia) => {
              this.agregarMateriaSenial(materia);
          });
          console.log(typeof arr);
      });
  }

  public agregarMateria(event: Event) {
      let tag = event.target as HTMLInputElement;
      let nuevaMateria: Materia = {
          nombre: tag.value,
          codigo: "", 
          id_plan_estudios: 0
      };
      this.http.post('http://localhost/materia', nuevaMateria).subscribe(() => {
          this.materias.update((materias) => [...materias, nuevaMateria]);
      });
  }

  public agregarMateriaSenial(materia: Materia) {
      this.materias.update((materias) => [...materias, materia]);
  }

  public modificarMateria(id: number, event: Event) {
      let tag = event.target as HTMLInputElement;
      let cuerpo = { nombre: tag.value };
      this.http.put(`http://localhost/materia/${id}`, cuerpo).subscribe(() => {
          this.materias.update((materias) => {
              return materias.map((materia) => {
                  if (materia.id === id) {
                      return { ...materia, ...cuerpo };
                  }
                  return materia;
              });
          });
      });
  }

  public borrarMateria(id: number) {
      this.http.delete(`http://localhost/materia/${id}`).subscribe(() => {
          this.materias.update((materias) => materias.filter((materia) => materia.id !== id));
      });
  }
}
