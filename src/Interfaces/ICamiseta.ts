export interface ICamiseta {
  id: number;
  create_at: number;
  equipo: string;
  liga: string;
  temporada: string;
  imagen: string;
  nombre: string;
  descripcion: string;
  categoria_id: number;
  equipo_id: number;
  destacada: boolean;
  destacadaGlobal: boolean;
}

export interface ICamisetaDetalleProps {
  camisetas: ICamiseta[];
}
