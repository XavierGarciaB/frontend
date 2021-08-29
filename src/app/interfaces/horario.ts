export interface Horario {
  id?: number;
  disponible: boolean;
  fecha: string,
  horaInicio: string;
  horaFin: string;
  profesionalId: number;
}
