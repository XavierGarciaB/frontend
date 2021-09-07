import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aviso } from 'src/app/interfaces/aviso';
import { AvisosService } from 'src/app/services/avisos/aviso.service';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { Profesional } from 'src/app/interfaces/profesional';
import { MatDialog } from '@angular/material/dialog';
import { MisAvisosDialogComponent } from './misAvisosDialog.component';
import { data } from 'jquery';
@Component({
    selector: 'app-misAvisos',
    templateUrl: './misAvisos.component.html',
    styleUrls: ['./misAvisos.component.css'],
})
export class MisAvisosComponent implements OnInit{
    accion=false;

    profesional: Profesional;
    avisos: Aviso[] = [];
    

    constructor(
        private avisosService: AvisosService,
        private profesionalService: ProfesionalService,
        public dialog: MatDialog,
       
    ){}


    ngOnInit(){
        this.profesional=this.profesionalService.profesional;
        console.log(this.profesional.id);
        this.getAvisosByProfesional(this.profesional.id).subscribe(result=>{
            this.avisos = result;
        });

        console.log(this.avisos[0]);

    }
    
    getAvisosByProfesional(id: number){
        return this.avisosService.listByProfesionalAvisos(id);
      }


    nuevoAviso(): void{
        this.accion=true;
        const dialogRef=this.dialog.open(MisAvisosDialogComponent,{
            
        }).afterClosed().subscribe(() => {
            this.profesional=this.profesionalService.profesional;
            this.getAvisosByProfesional(this.profesional.id).subscribe(result => {
                this.avisos = result;
            });
        });
    }

    getAvisoById(id: number){
        return this.avisosService.listById(id);
    }

    avisoInfo(id: number): void{
        
        let aviso:Aviso;
        console.log(id);
        this.getAvisoById(id).subscribe(result=>{
            aviso=result;
            console.log(aviso);
            const dialogRef=this.dialog.open(MisAvisosDialogComponent,{
                data : {
                    id:aviso.id,
                    fechaPublicacion:aviso.fechaPublicacion,
                    titulo: aviso.titulo,
                    contenido:aviso.contenido
                }
                
    
            }).afterClosed().subscribe(()=>{
                this.profesional=this.profesionalService.profesional;
                this.getAvisosByProfesional(this.profesional.id).subscribe(result => {
                this.avisos = result;
            });
            })
        })
        
    }

    eliminarAviso(id: number): void{
        this.avisosService.delete(id).subscribe(result=>{
            console.log(result);
            this.profesional=this.profesionalService.profesional;
            this.getAvisosByProfesional(this.profesional.id).subscribe(result => {
                this.avisos = result;
            });
        })
    }



   

    
}