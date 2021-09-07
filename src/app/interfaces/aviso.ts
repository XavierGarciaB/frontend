import { Profesional } from "./profesional";

export interface Aviso {
    id?: number;
    fechaPublicacion: string;
    contenido: string;
    titulo: string;
    profesionales_id:number;
    profesional?: Profesional

    //profesionalName: string;
  
  }