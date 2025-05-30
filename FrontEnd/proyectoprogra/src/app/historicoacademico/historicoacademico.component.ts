import { Component, signal } from '@angular/core';
import { HistoricoAcademico } from '../../model/historicoacademico';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historicoacademico',
  imports: [],
  templateUrl: './historicoacademico.component.html',
  styleUrl: './historicoacademico.component.css'
})
export class HistoricoacademicoComponent {
  public historicosAcademicos = signal<HistoricoAcademico[]>([]);

    constructor(private http: HttpClient) {
        this.obtenerHistoricosAcademicos();
    }

    public obtenerHistoricosAcademicos() {
        this.http.get('http://localhost/historico-academico').subscribe((historicos) => {
            const arr = historicos as HistoricoAcademico[];
            arr.forEach((historico) => {
                this.agregarHistoricoSenial(historico);
            });
            console.log(typeof arr);
        });
    }

    public agregarHistoricoAcademico(event: Event) {
        let tag = event.target as HTMLInputElement;
        let nuevoHistorico: HistoricoAcademico = {
            id_usuario: 0,
            id_curso: 0,
            nota: parseFloat(tag.value)
        };
        this.http.post('http://localhost/historico-academico', nuevoHistorico).subscribe(() => {
            this.historicosAcademicos.update((historicos) => [...historicos, nuevoHistorico]);
        });
    }

    public agregarHistoricoSenial(historico: HistoricoAcademico) {
        this.historicosAcademicos.update((historicos) => [...historicos, historico]);
    }

    public modificarHistoricoAcademico(id: number, event: Event) {
        let tag = event.target as HTMLInputElement;
        let cuerpo = { nota: parseFloat(tag.value) };
        this.http.put(`http://localhost/historico-academico/${id}`, cuerpo).subscribe(() => {
            this.historicosAcademicos.update((historicos) => {
                return historicos.map((historico) => {
                    if (historico.id === id) {
                        return { ...historico, ...cuerpo };
                    }
                    return historico;
                });
            });
        });
    }

    public borrarHistoricoAcademico(id: number) {
        this.http.delete(`http://localhost/historico-academico/${id}`).subscribe(() => {
            this.historicosAcademicos.update((historicos) => historicos.filter((historico) => historico.id !== id));
        });
    }
}
