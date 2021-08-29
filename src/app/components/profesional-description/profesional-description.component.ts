import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profesional } from 'src/app/interfaces/profesional';
import { Resena } from 'src/app/interfaces/resena';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { ResenasService } from 'src/app/services/resenas/resena.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-profesional-description',
  templateUrl: './profesional-description.component.html',
  styleUrls: ['./profesional-description.component.css']
})
export class ProfesionalDescriptionComponent implements OnInit {
  profesional: Profesional;
  resenas: Resena[] = [];

  constructor(
    private profesionalService: ProfesionalService,
    private resenaService: ResenasService,
    private usuarioService: UsuariosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchProfesional();
  }

  fetchProfesional(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.profesionalService.get(parseInt(id)).subscribe(profesional => {
      this.profesional = profesional;
      this.fetchResenas();
    });
  }

  fetchResenas(): void {
    this.resenaService.listByProfesional(this.profesional.id).subscribe(resenas => {
      this.resenas = resenas;
      for (let resena of this.resenas) {
        this.fetchUsuario(resena);
      }
    });
  }

  fetchUsuario(resena: Resena) {
    this.usuarioService.get(parseInt(resena.usuarios_id)).subscribe(usuario => {
      resena.usuario = usuario;
    });
  }

}
