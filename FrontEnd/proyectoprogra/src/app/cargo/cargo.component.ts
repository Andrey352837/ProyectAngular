import { Component, signal } from '@angular/core';
import {cargo} from '../../model/cargo'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cargo',
  imports: [],
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.css'
})
export class CargoComponent {


  public cargos = signal<cargo[]>([]);

  constructor(private http: HttpClient) {
    this.metodoGETProvincias();
  };
 

  public metodoGETProvincias() {
    let cuerpo = {};
    this.http.get('http://localhost/cargo', cuerpo).subscribe((cargos) => {
      const arr = cargos as cargo[];
      arr.forEach((cargo) => {
        this.agregarCargoSenial(cargo.id, cargo.nombre);
      });
      console.log(typeof(arr));
    });
  };


  public agregarCargo(event:  Event) {
    let tag = event.target as HTMLInputElement
    let cuerpo = {
      nombre: tag.value,
    }
    this.http.post('http://localhost/cargo', cuerpo).subscribe(() => {
      // const nuevaProvincia = Provincia as Provincia;
      this.cargos.update((cargos) => [...cargos, cuerpo]);
    });
  };


  public agregarCargoSenial(id?: number, nombre?: string) {
    let nuevoCargo = {
      id: id,
      nombre: nombre,
    };
    this.cargos.update((cargo) => [...cargo, nuevoCargo]);
  };

  public modificarCargo(Id: any, event:  Event) {
    let tag = event.target as HTMLInputElement
    let cuerpo = {
      nombre: tag.value,
    }
    this.http.put('http://localhost/cargo/' + Id, cuerpo).subscribe(() => {
      // const nuevaProvincia = Provincia as Provincia;
      this.cargos.update((Cargoss) => {
        return Cargoss.map((cargo) => {
          if (cargo.id === Id) {
            return {...cargo, cuerpo};
          }
          return cargo;
        });
      });
    });
  };


  public borrarCargo(Id: any) {
    console.log(Id);
    this.http.delete('http://localhost/cargo/' + Id).subscribe(() => {
      this.cargos.update((cargo) => cargo.filter((cargos) => cargos.id !== Id));
    });
  };
}



