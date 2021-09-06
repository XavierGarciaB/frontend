import { Injectable } from '@angular/core';
import { ProfesionalService } from '../profesional/profesional.service';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private usuarioService: UsuariosService,
    private profesionalService: ProfesionalService
  ) { }

  isProfi(): boolean {
    if (this.usuarioService.usuario !== undefined) {
      return false;
    } else if (this.profesionalService.profesional !== undefined) {
      return true;
    }
  }

  restartData(): void {
    this.usuarioService.usuario = undefined;
    this.profesionalService.profesional = undefined;
  }
}
