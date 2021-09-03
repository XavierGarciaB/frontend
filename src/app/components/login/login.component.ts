import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new FormControl('', [Validators.required]);
  cedula = new FormControl('', [Validators.required]);

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.usuarioService.validate(this.usuario.value, this.cedula.value).subscribe(usuario => {
      if (usuario != null) {
        this.usuarioService.usuario = usuario;
        this.router.navigate(['/profesionales']);
      } else {
        console.log('No existe usuario');
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/auth', 'register']);
  }

}
