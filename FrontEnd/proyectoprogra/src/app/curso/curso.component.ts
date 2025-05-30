import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-curso',
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  public cursos = signal<Curso[]>([]);

  constructor(private http: HttpClient) {
      this.obtenerCursos();
  }

  public obtenerCursos() {
      this.http.get('http://localhost/curso').subscribe((cursos) => {
          const arr = cursos as Curso[];
          arr.forEach((curso) => {
              this.agregarCursoSenial(curso);
          });
          console.log(typeof arr);
      });
  }

  public agregarCurso(event: Event) {
      let tag = event.target as HTMLInputElement;
      let nuevoCurso: Curso = {
          id_materia: 0,
          id_docente: 0,
          horario: tag.value,
          aula: "",
          id_cuatrimestre: 0
      };
      this.http.post('http://localhost/curso', nuevoCurso).subscribe(() => {
          this.cursos.update((cursos) => [...cursos, nuevoCurso]);
      });
  }

  public agregarCursoSenial(curso: Curso) {
      this.cursos.update((cursos) => [...cursos, curso]);
  }

  public modificarCurso(id: number, event: Event) {
      let tag = event.target as HTMLInputElement;
      let cuerpo = { horario: tag.value };
      this.http.put(`http://localhost/curso/${id}`, cuerpo).subscribe(() => {
          this.cursos.update((cursos) => {
              return cursos.map((curso) => {
                  if (curso.id === id) {
                      return { ...curso, ...cuerpo };
                  }
                  return curso;
              });
          });
      });
  }

  public borrarCurso(id: number) {
      this.http.delete(`http://localhost/curso/${id}`).subscribe(() => {
          this.cursos.update((cursos) => cursos.filter((curso) => curso.id !== id));
      });
  }
}
