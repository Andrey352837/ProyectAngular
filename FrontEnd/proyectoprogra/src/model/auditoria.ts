export interface Auditoria {
    id?: number;
    id_usuario: number;
    accion: string;
    fecha_hora?: Date;
    descripcion: string;
}
