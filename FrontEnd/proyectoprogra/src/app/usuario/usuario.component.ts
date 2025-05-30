import { Component, signal } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  public usuarios = signal<Usuario[]>([]);

  constructor(private http: HttpClient) {
      this.obtenerUsuarios();
  }

  public obtenerUsuarios() {
      this.http.get('http://localhost/usuario').subscribe((usuarios) => {
          const arr = usuarios as Usuario[];
          arr.forEach((usuario) => {
              this.agregarUsuarioSenial(usuario);
          });
          console.log(typeof arr);
      });
  }

  public agregarUsuario(event: Event) {
      let tag = event.target as HTMLInputElement;
      let nuevoUsuario: Usuario = {
          cedula: tag.value,
          nombre: "",
          apellidos: "",
          fecha_nacimiento: "",
          correo: "",
          contrasena: "",
          id_cargo: 0,
      };
      this.http.post('http://localhost/usuario', nuevoUsuario).subscribe(() => {
          this.usuarios.update((usuarios) => [...usuarios, nuevoUsuario]);
      });
  }

  public agregarUsuarioSenial(usuario: Usuario) {
      this.usuarios.update((usuarios) => [...usuarios, usuario]);
  }

  public modificarUsuario(id: number, event: Event) {
      let tag = event.target as HTMLInputElement;
      let cuerpo = { nombre: tag.value };
      this.http.put(`http://localhost/usuario/${id}`, cuerpo).subscribe(() => {
          this.usuarios.update((usuarios) => {
              return usuarios.map((usuario) => {
                  if (usuario.id === id) {
                      return { ...usuario, ...cuerpo };
                  }
                  return usuario;
              });
          });
      });
  }

  public borrarUsuario(id: number) {
      this.http.delete(`http://localhost/usuario/${id}`).subscribe(() => {
          this.usuarios.update((usuarios) => usuarios.filter((usuario) => usuario.id !== id));
      });
  }
}

