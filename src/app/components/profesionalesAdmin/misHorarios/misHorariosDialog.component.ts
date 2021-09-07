import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/interfaces/horario';
import { HorariosService } from 'src/app/services/horarios/horarios.service';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { Profesional } from 'src/app/interfaces/profesional';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MisHorariosComponent } from './misHorarios.component';
import { CommonModule } from '@angular/common';
declare var require: any
@Component({
    selector: 'app-misHorariosDialog',
    templateUrl: './misHorariosDialog.component.html',
    styleUrls: ['./misHorariosDialog.component.css'],
})
export class MisHorariosDialogComponent implements OnInit{
    profesional: Profesional;
    /*titulo = new FormControl();
    contenido = new FormControl();
    //fechaPublicacion=this.data.fechaPublicacion;
    //id=this.data.id;
    fechaPublicacion=new FormControl();
    ;*/
    id=new FormControl();
    horaInicio= new FormControl();
    horaFin= new FormControl();
    fecha=new FormControl();
    disponible=new FormControl();
    profesionales_id=new FormControl();

    
    
    constructor(
        private profesionalService: ProfesionalService,
        public dialogRef: MatDialogRef<MisHorariosComponent>,
        private horariosService:HorariosService,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: Horario
        
       
    ){}


    ngOnInit(){
        this.profesional=this.profesionalService.profesional;
        /*this.titulo.setValue(this.data.titulo);
        this.contenido.setValue(this.data.contenido);
        this.fechaPublicacion.setValue(this.data.fechaPublicacion);*/
        this.id.setValue(this.data.id);
        this.horaInicio.setValue(this.data.horaInicio);
        this.horaFin.setValue(this.data.horaFin);
        this.fecha.setValue(this.data.fecha);
        this.profesionales_id.setValue(this.data.profesionales_id);
        this.disponible.setValue(this.data.disponible);

    }

    onSubmit(form: NgForm): void {
        return;
    }

    crearHorario():void{
        const horario: Horario={
            disponible: false,
            fecha: this.fecha.value,
            horaInicio: this.horaInicio.value,
            horaFin: this.horaFin.value,
            profesionales_id: this.profesional.id.toString()

        }
        this.horariosService.create(horario).subscribe(response=>{
            console.log(response);
            this.dialogRef.close();
        console.log(horario.id);
        })
        
    }


    actualizarHorario(): void{
        //let dateFormat=require('dateformat');
        const horario: Horario ={
            id:this.id.value,
            disponible: this.disponible.value,
            fecha: this.fecha.value,
            horaInicio: this.horaInicio.value,
            horaFin: this.horaFin.value,
            profesionales_id: this.profesional.id.toString()
        };

        this.horariosService.update(horario).subscribe(response=>{
            console.log(response);
            this.dialogRef.close();
        })
        
    }

    cancelar(): void{
        this.dialogRef.close()

    }

    
    

    
}