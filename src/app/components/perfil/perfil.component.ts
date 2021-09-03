import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuarios';
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

  constructor(
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.setInitialValues();
  }

  update(): void {
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

  private setInitialValues(): void {
    this.usuario = this.usuarioService.usuario;
    this.nombre.setValue(this.usuario.nombre);
    this.email.setValue(this.usuario.email);
    this.cedula.setValue(this.usuario.cedula);
    this.edad.setValue(this.usuario.edad);
  }

}
