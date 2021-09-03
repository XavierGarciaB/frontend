import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
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

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    const usuario: Usuario = {
      nombre: this.nombre.value,
      email: this.email.value,
      cedula: this.cedula.value,
      edad: this.edad.value
    };
    this.usuarioService.create(usuario).subscribe(response => {
      this.goToLogin();
    })
  }

  goToLogin(): void {
    this.router.navigate(['/auth', 'login']);
  }

}
