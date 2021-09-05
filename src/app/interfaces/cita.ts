import { Horario } from "./horario";
import { Usuario } from "./usuarios";

export interface Cita {
  id?: number;
  estado: string;
  usuarios_id: string;
  horarios_id: string;
  usuario?: Usuario;
  horario?: Horario;
}
