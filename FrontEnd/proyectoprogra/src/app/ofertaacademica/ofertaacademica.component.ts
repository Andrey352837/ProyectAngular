import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

import { OfertaAcademica } from '../../model/ofertaacademica'
@Component({
  selector: 'app-ofertaacademica',
  imports: [],
  templateUrl: './ofertaacademica.component.html',
  styleUrl: './ofertaacademica.component.css'
})
export class OfertaacademicaComponent {
  public ofertasAcademicas = signal<OfertaAcademica[]>([]);

  constructor(private http: HttpClient) {
      this.obtenerOfertasAcademicas();
  }

  public obtenerOfertasAcademicas() {
      this.http.get('http://localhost/oferta-academica').subscribe((ofertas) => {
          const arr = ofertas as OfertaAcademica[];
          arr.forEach((oferta) => {
              this.agregarOfertaSenial(oferta);
          });
          console.log(typeof arr);
      });
  }

  public agregarOfertaAcademica(event: Event) {
      let tag = event.target as HTMLInputElement;
      let nuevaOferta: OfertaAcademica = {
          id_curso: 0,
          id_carrera: 0,
          id_cuatrimestre: 0,
          anno: new Date().getFullYear()
      };
      this.http.post('http://localhost/oferta-academica', nuevaOferta).subscribe(() => {
          this.ofertasAcademicas.update((ofertas) => [...ofertas, nuevaOferta]);
      });
  }

  public agregarOfertaSenial(oferta: OfertaAcademica) {
      this.ofertasAcademicas.update((ofertas) => [...ofertas, oferta]);
  }

  public modificarOfertaAcademica(id: number, event: Event) {
      let tag = event.target as HTMLInputElement;
      let cuerpo = { anno: parseInt(tag.value) };
      this.http.put(`http://localhost/oferta-academica/${id}`, cuerpo).subscribe(() => {
          this.ofertasAcademicas.update((ofertas) => {
              return ofertas.map((oferta) => {
                  if (oferta.id === id) {
                      return { ...oferta, ...cuerpo };
                  }
                  return oferta;
              });
          });
      });
  }

  public borrarOfertaAcademica(id: number) {
      this.http.delete(`http://localhost/oferta-academica/${id}`).subscribe(() => {
          this.ofertasAcademicas.update((ofertas) => ofertas.filter((oferta) => oferta.id !== id));
      });
  }
}
