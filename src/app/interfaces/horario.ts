import { Profesional } from "./profesional";

export interface Horario {
  id?: number;
  disponible: boolean;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  profesionales_id: string;
  profesional?: Profesional
}
