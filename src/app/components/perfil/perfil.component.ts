import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Profesional } from 'src/app/interfaces/profesional';
import { Usuario } from 'src/app/interfaces/usuarios';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario;
  nombre = new FormControl();
  email = new FormControl();
  cedula = new FormControl();
  edad = new FormControl();

  isProfi: boolean = false;

  profesional: Profesional;
  nombreProfi = new FormControl();
  edadProfi = new FormControl();
  direccion = new FormControl();

  constructor(
    private usuarioService: UsuariosService,
    private profesionalService: ProfesionalService,
    private authService: AuthService
  ) {
    this.isProfi = this.authService.isProfi();
  }

  ngOnInit(): void {
    this.setInitialValues();
  }

  update(): void {
    if (this.isProfi) {
      this.updateProfesional();
    } else {
      this.updateUsuario();
    }
  }

  private updateUsuario(): void {
    const usuario: Usuario = {
      id: this.usuario.id,
      nombre: this.nombre.value,
      email: this.email.value,
      cedula: this.cedula.value,
      edad: this.edad.value
    };
    this.usuarioService.update(usuario).subscribe(response => {
      this.usuarioService.usuario = usuario;
    });
  }

  private updateProfesional(): void {
    const profesional: Profesional = {
      id: this.profesional.id,
      nombre: this.nombreProfi.value,
      edad: this.edadProfi.value,
      direccion: this.direccion.value
    };
    this.profesionalService.update(profesional).subscribe(response => {
      this.profesionalService.profesional = profesional;
    });
  }

  private setInitialValues(): void {
    if (this.isProfi) {
      this.setInitialValuesProfesional();
    } else {
      this.setInitialValuesUsuario();
    }
  }

  private setInitialValuesUsuario(): void {
    this.usuario = this.usuarioService.usuario;
    this.nombre.setValue(this.usuario.nombre);
    this.email.setValue(this.usuario.email);
    this.cedula.setValue(this.usuario.cedula);
    this.edad.setValue(this.usuario.edad);
  }

  private setInitialValuesProfesional(): void {
    this.profesional = this.profesionalService.profesional;
    this.nombreProfi.setValue(this.profesional.nombre);
    this.edadProfi.setValue(this.profesional.edad);
    this.direccion.setValue(this.profesional.direccion);
  }

}
