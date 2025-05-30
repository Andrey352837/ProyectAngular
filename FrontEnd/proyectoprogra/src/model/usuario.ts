export interface Usuario {
    id?: number;
    cedula: string;
    nombre: string;
    apellidos: string;
    fecha_nacimiento: string;
    correo: string;
    contrasena: string;
    id_cargo: number;
}