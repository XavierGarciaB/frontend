import { Usuario } from "./usuarios";

export interface Resena {
  id?: number;
  fechaPublicacion: string;
  comentario: string;
  usuarios_id: string;
  profesionals_id: string;
  usuario?: Usuario;
}
