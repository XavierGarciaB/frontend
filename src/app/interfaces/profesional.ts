import { Horario } from "./horario";

export interface Profesional {
  id?: number;
  nombre: string;
  edad: number;
  direccion: string;
  horarios?: Horario[]
}