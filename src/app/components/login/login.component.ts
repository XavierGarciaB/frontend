import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new FormControl('', [Validators.required]);
  cedula = new FormControl('', [Validators.required]);

  id = new FormControl('', Validators.required);
  nombre = new FormControl('', Validators.required);

  isProfi: boolean = false;

  constructor(
    private usuarioService: UsuariosService,
    private profesionalService: ProfesionalService,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation().extras.state !== undefined) {
      this.isProfi =  this.router.getCurrentNavigation().extras.state.isProfi;
    }
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.isProfi) {
      this.validateProfesional();
    } else {
      this.validateUsuario();
    }
  }

  validateUsuario(): void {
    this.usuarioService.validate(this.usuario.value, this.cedula.value).subscribe(usuario => {
      if (usuario != null) {
        this.usuarioService.usuario = usuario;
        this.router.navigate(['/profesionales']);
      } else {
        console.log('No existe usuario');
      }
    });
  }

  validateProfesional(): void {
    this.profesionalService.validate(this.id.value, this.nombre.value).subscribe(profesional => {
      if (profesional != null) {
        this.profesionalService.profesional = profesional;
        this.router.navigate(['/profesionales']);
      } else {
        console.log('No existe profesional');
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/auth', 'register'], { state: { isProfi: this.isProfi } });
  }

  changeLogin(): void {
    this.isProfi = !this.isProfi;
  }

}
