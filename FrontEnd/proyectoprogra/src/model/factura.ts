export interface EncabezadoFactura {
    id?: number;
    id_cuatrimestre: number;
    id_carrera: number;
    id_usuario: number;
    fecha_hora?: Date;
    detalles: DetalleFactura[];
}

export interface DetalleFactura {
    id?: number;
    id_curso: number;
    id_encabezadofactura?: number;
    precio_unitario: number;
}