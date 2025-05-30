import { Component, signal } from '@angular/core';
import { EncabezadoFactura } from '../../model/factura';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-factura',
  imports: [],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  public facturas = signal<EncabezadoFactura[]>([]);

  constructor(private http: HttpClient) {
      this.obtenerFacturas();
  }

  public obtenerFacturas() {
      this.http.get('http://localhost/facturas').subscribe((facturas) => {
          const arr = facturas as EncabezadoFactura[];
          arr.forEach((factura) => {
              this.agregarFacturaSenial(factura);
          });
          console.log(typeof arr);
      });
  }

  public agregarFactura(event: Event) {
      let nuevaFactura: EncabezadoFactura = {
          id_cuatrimestre: 0,
          id_carrera: 0,
          id_usuario: 0,
          fecha_hora: new Date(),
          detalles: []
      };

      this.http.post('http://localhost/facturas', nuevaFactura).subscribe((response: any) => {
          nuevaFactura.id = response.id;
          this.facturas.update((facturas) => [...facturas, nuevaFactura]);
      });
  }

  public agregarFacturaSenial(factura: EncabezadoFactura) {
      this.facturas.update((facturas) => [...facturas, factura]);
  }

  public modificarFactura(id: number, event: Event) {
      let tag = event.target as HTMLInputElement;
      let cuerpo = { fecha_hora: new Date(tag.value) };
      this.http.put(`http://localhost/facturas/${id}`, cuerpo).subscribe(() => {
          this.facturas.update((facturas) => {
              return facturas.map((factura) => {
                  if (factura.id === id) {
                      return { ...factura, ...cuerpo };
                  }
                  return factura;
              });
          });
      });
  }

  public borrarFactura(id: number) {
      this.http.delete(`http://localhost/facturas/${id}`).subscribe(() => {
          this.facturas.update((facturas) => facturas.filter((factura) => factura.id !== id));
      });
  }
}
