import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Profesional } from 'src/app/interfaces/profesional';
import { Usuario } from 'src/app/interfaces/usuarios';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombre = new FormControl();
  email = new FormControl();
  cedula = new FormControl();
  edad = new FormControl();

  isProfi: boolean = false;

  nombreProfi = new FormControl();
  edadProfi = new FormControl();
  direccion = new FormControl();

  constructor(
    private router: Router,
    private usuarioService: UsuariosService,
    private profesionalService: ProfesionalService
  ) {
    this.isProfi =  this.router.getCurrentNavigation().extras.state.isProfi;
  }

  ngOnInit(): void {
  }

  register(): void {
    if (this.isProfi) {
      this.registerProfesional();
    } else {
      this.registerUsuario();
    }
  }

  private registerUsuario(): void {
    const usuario: Usuario = {
      nombre: this.nombre.value,
      email: this.email.value,
      cedula: this.cedula.value,
      edad: this.edad.value
    };
    this.usuarioService.create(usuario).subscribe(response => {
      this.goToLogin();
    });
  }

  private registerProfesional(): void {
    const profesional: Profesional = {
      nombre: this.nombreProfi.value,
      edad: this.edadProfi.value,
      direccion: this.direccion.value
    };
    this.profesionalService.create(profesional).subscribe(response => {
      this.goToLogin();
    });
  }

  goToLogin(): void {
    this.router.navigate(['/auth', 'login'], { state: { isProfi: this.isProfi } });
  }

}
