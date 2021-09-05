import { Profesional } from "./profesional";
import { Usuario } from "./usuarios";


export interface Resena {
  id?: number;
  fechaPublicacion: string;
  comentario: string;
  usuarios_id: string;
  profesionales_id: string;
  usuario?: Usuario;
  profesional?: Profesional;
}
