import { Component, signal } from '@angular/core';
import { Carrera } from '../../model/carrera';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrera',
  imports: [],
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})
export class CarreraComponent {

    public carreras = signal<Carrera[]>([]);

    constructor(private http: HttpClient) {
        this.obtenerCarreras();
    }

    public obtenerCarreras() {
        this.http.get('http://localhost/carrera').subscribe((carreras) => {
            const arr = carreras as Carrera[];
            arr.forEach((carrera) => {
                this.agregarCarreraSenial(carrera);
            });
            console.log(typeof arr);
        });
    }

    public agregarCarrera(event: Event) {
        let tag = event.target as HTMLInputElement;
        let nuevaCarrera: Carrera = {
            nombre: tag.value,
            especialidad: ""
        };
        this.http.post('http://localhost/carrera', nuevaCarrera).subscribe(() => {
            this.carreras.update((carreras) => [...carreras, nuevaCarrera]);
        });
    }

    public agregarCarreraSenial(carrera: Carrera) {
        this.carreras.update((carreras) => [...carreras, carrera]);
    }

    public modificarCarrera(id: number, event: Event) {
        let tag = event.target as HTMLInputElement;
        let cuerpo = { nombre: tag.value };
        this.http.put(`http://localhost/carrera/${id}`, cuerpo).subscribe(() => {
            this.carreras.update((carreras) => {
                return carreras.map((carrera) => {
                    if (carrera.id === id) {
                        return { ...carrera, ...cuerpo };
                    }
                    return carrera;
                });
            });
        });
    }

    public borrarCarrera(id: number) {
        this.http.delete(`http://localhost/carrera/${id}`).subscribe(() => {
            this.carreras.update((carreras) => carreras.filter((carrera) => carrera.id !== id));
        });
    }
}
