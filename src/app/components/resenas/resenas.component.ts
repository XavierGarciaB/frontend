import { Component, OnInit } from '@angular/core';
import { ResenasService } from 'src/app/services/resenas/resena.service';
import { Resena } from 'src/app/interfaces/resena';
import { MatDialog } from '@angular/material/dialog';
import { ResenasDialogComponent } from './resenasDialog.component';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Profesional } from 'src/app/interfaces/profesional';

@Component({
    selector: 'app-resenas',
    templateUrl: './resenas.component.html',
    styleUrls: ['./resenas.component.css'],
})

export class ResenasComponent implements OnInit{
  showMore = false;
  selectedValue: string;
  resenas: Resena[] = [];
  selectedResenas: Resena[] = [];
  profesionales = [{id:0,nombre:"Todos"}];

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
      let element = {id:profesional.id,nombre:profesional.nombre}
      if(!this.profesionales.includes(element) && this.profesionales.length!=0){
        this.addProfesional(element)
      }else{
        this.profesionales.push(element)
      }
    })
  }

  addProfesional(profesional):void{
    let add = true
    let times = 0
    while(times<this.profesionales.length){
      if(this.profesionales[times].id == profesional.id){
        add=false
        times=this.profesionales.length
      }
      times++
    }
    if(add){
      this.profesionales.push(profesional)
    }
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
      data: { user: resena.usuario?.nombre, profesional: resena.profesional?.nombre, comment: resena.comentario, fechaPublicacion: resena.fechaPublicacion }
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

  search(idProfesional){
    this.selectedResenas = []
    if(idProfesional!=0){
      for(let resena of this.resenas){
        if(resena.profesional.id==idProfesional){
          this.selectedResenas.push(resena)
        }
      }
    }else{
      this.selectedResenas = this.resenas
    }
  }

  ngOnInit(){
    this.getResenas().subscribe(reviews=>{
      this.resenas = reviews;
      this.resenas.forEach(element => {
        this.setResenaProfesional(element)
        this.setResenaUsuario(element)
      });
      this.selectedResenas =this.resenas
    })
    
  }



    

    
}