import { Component, signal } from '@angular/core';
import { Auditoria } from '../../model/auditoria';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auditoria',
  imports: [],
  templateUrl: './auditoria.component.html',
  styleUrl: './auditoria.component.css'
})
export class AuditoriaComponent {
  public auditorias = signal<Auditoria[]>([]);

  constructor(private http: HttpClient) {
      this.obtenerAuditorias();
  }

  public obtenerAuditorias() {
      this.http.get('http://localhost/auditoria').subscribe((auditorias) => {
          const arr = auditorias as Auditoria[];
          arr.forEach((auditoria) => {
              this.agregarAuditoriaSenial(auditoria);
          });
          console.log(typeof arr);
      });
  }

  public agregarAuditoria(event: Event) {
      let tag = event.target as HTMLInputElement;
      let nuevaAuditoria: Auditoria = {
          id_usuario: 0,
          accion: tag.value,
          fecha_hora: new Date(),
          descripcion: ""
      };
      this.http.post('http://localhost/auditoria', nuevaAuditoria).subscribe(() => {
          this.auditorias.update((auditorias) => [...auditorias, nuevaAuditoria]);
      });
  }

  public agregarAuditoriaSenial(auditoria: Auditoria) {
      this.auditorias.update((auditorias) => [...auditorias, auditoria]);
  }

  public modificarAuditoria(id: number, event: Event) {
      let tag = event.target as HTMLInputElement;
      let cuerpo = { descripcion: tag.value };
      this.http.put(`http://localhost/auditoria/${id}`, cuerpo).subscribe(() => {
          this.auditorias.update((auditorias) => {
              return auditorias.map((auditoria) => {
                  if (auditoria.id === id) {
                      return { ...auditoria, ...cuerpo };
                  }
                  return auditoria;
              });
          });
      });
  }

  public borrarAuditoria(id: number) {
      this.http.delete(`http://localhost/auditoria/${id}`).subscribe(() => {
          this.auditorias.update((auditorias) => auditorias.filter((auditoria) => auditoria.id !== id));
      });
  }
}
