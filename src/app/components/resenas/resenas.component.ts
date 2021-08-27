import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResenasService } from 'src/app/services/resenas/resena.service';
import { Resena } from 'src/app/interfaces/resena';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { ResenasDialogComponent } from './resenasDialog.component';

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
    public dialog: MatDialog

  ) {}

  getResenas(){
    return this.resenasService.list()
  }

  setShowMore(value){
    this.showMore = value;
  }

  mostrarMas(resena): void {
    let dialogRef = this.dialog.open(ResenasDialogComponent, {
      width: '800px',
      height: '250px',
      data: { user: resena.userName, profesional: resena.profesionalName, comment: resena.comentario }
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



  ngOnInit() {
    this.getResenas().subscribe(reviews=>{
      this.resenas = reviews;
    })
  }



    

    
}