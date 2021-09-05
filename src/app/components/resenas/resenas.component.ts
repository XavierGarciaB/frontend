import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResenasService } from 'src/app/services/resenas/resena.service';
import { Resena } from 'src/app/interfaces/resena';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { ResenasDialogComponent } from './resenasDialog.component';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
    selector: 'app-resenas',
    templateUrl: './resenas.component.html',
    styleUrls: ['./resenas.component.css'],
})

export class ResenasComponent implements OnInit{
  showMore: false;
  resenas: Resena[] = [];

  constructor(    
    private resenasService: ResenasService,
    private profesionalesService: ProfesionalService,
    private usuariosService: UsuariosService,
    public dialog: MatDialog

  ) {}

  getResenas(){
    return this.resenasService.list()
  }

  setResenaProfesional(resena:Resena): void{
    this.profesionalesService.get(parseInt(resena.profesionales_id)).subscribe(profesional=>{
      resena.profesional = profesional
    })
  }

  setResenaUsuario(resena: Resena): void{
    this.usuariosService.get(parseInt(resena.usuarios_id)).subscribe(usuario=>{
      resena.usuario = usuario
    })
  
  }

  setShowMore(value): void{
    this.showMore = value;
  }

  mostrarMas(resena): void {
    this.dialog.open(ResenasDialogComponent, {
      width: '800px',
      height: '250px',
      panelClass: 'my-dialog',
      data: { user: resena.usuario?.nombre, profesional: resena.profesional?.nombre, comment: resena.comentario }
    });

  }

  textoSuperiorALimite(comentario){
    if(comentario.length>80){
      this.setShowMore(true)
      return comentario.substring(0,79)
    }else{
      this.setShowMore(false)
      return comentario
    }
  }

  ngOnInit(){
    this.getResenas().subscribe(reviews=>{
      this.resenas = reviews;
      this.resenas.forEach(element => {
        this.setResenaProfesional(element)
        this.setResenaUsuario(element)
      });
    })


  }



    

    
}