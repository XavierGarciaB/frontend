import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/interfaces/horario';
import { HorariosService } from 'src/app/services/horarios/horarios.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MisHorariosDialogComponent } from './misHorariosDialog.component';
import { Profesional } from 'src/app/interfaces/profesional'; 
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { data } from 'jquery';
@Component({
    selector: 'app-misHorarios',
    templateUrl: './misHorarios.component.html',
    styleUrls: ['./misHorarios.component.css'],
})
export class MisHorariosComponent implements OnInit{
    horarios: Horario[] =[];
    profesional: Profesional;

    
    constructor(
        private dialog: MatDialog,
        private horariosServices: HorariosService,
        private profesionalService: ProfesionalService,
       
    ){}

    ngOnInit(){
        this.profesional=this.profesionalService.profesional;
        this.getHorariosById(this.profesional.id).subscribe(result=>{
            this.horarios=result;
        });

    }

    nuevoHorario(){
        const dialogRef = this.dialog.open(MisHorariosDialogComponent,{
        }).afterClosed().subscribe(() => {
            this.profesional = this.profesionalService.profesional;
            this.getHorariosById(this.profesional.id).subscribe(result=>{
                this.horarios = result;
            });
        });
    }

    horarioInfo(id: number): void{
        console.log(id);
        let horario: Horario;
        this.getById(id).subscribe(result=>{
            horario=result;
            const dialogRef=this.dialog.open(MisHorariosDialogComponent,{
                data:{
                    id: horario.id,
                    disponible: horario.disponible,
                    horaInicio: horario.horaInicio,
                    horaFin: horario.horaFin,
                    profesionales_id: horario.profesionales_id,
                    fecha: horario.fecha
    
                }
                
            })
            console.log(horario);

        })
        
        
    }
    

    getHorariosById(id: number){
        return this.horariosServices.list(id);

    }

    getById(id: number){
        return this.horariosServices.get(id);
    }

    eliminarHorario(id: number): void{
        this.horariosServices.delete(id).subscribe(result=>{
            console.log(result);
            this.profesional = this.profesionalService.profesional;
            this.getHorariosById(this.profesional.id).subscribe(result=>{
                this.horarios = result;
            });
        });
    }
}