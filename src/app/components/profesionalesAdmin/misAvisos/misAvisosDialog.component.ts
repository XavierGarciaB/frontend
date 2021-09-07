import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aviso } from 'src/app/interfaces/aviso';
import { AvisosService } from 'src/app/services/avisos/aviso.service';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { Profesional } from 'src/app/interfaces/profesional';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MisAvisosComponent } from './misAvisos.component';
import { CommonModule } from '@angular/common';
declare var require: any
@Component({
    selector: 'app-misAvisosDialog',
    templateUrl: './misAvisosDialog.component.html',
    styleUrls: ['./misAvisosDialog.component.css'],
})
export class MisAvisosDialogComponent implements OnInit{
    profesional: Profesional;
    titulo = new FormControl();
    contenido = new FormControl();
    //fechaPublicacion=this.data.fechaPublicacion;
    //id=this.data.id;
    fechaPublicacion=new FormControl();
    id=new FormControl();
    
    constructor(
        private profesionalService: ProfesionalService,
        public dialogRef: MatDialogRef<MisAvisosComponent>,
        private avisosService:AvisosService,
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: Aviso
        
       
    ){}


    ngOnInit(){
        this.profesional=this.profesionalService.profesional;
        this.titulo.setValue(this.data.titulo);
        this.contenido.setValue(this.data.contenido);
        this.fechaPublicacion.setValue(this.data.fechaPublicacion);
        this.id.setValue(this.data.id);

    }

    onSubmit(form: NgForm): void {
        return;
    }


    crearAviso():void{
        let dateFormat=require('dateformat');
        let now=new Date();
        let fecha=dateFormat(now,"yyyy-mm-dd H:MM:ss")
        
        
       const aviso: Aviso ={
            fechaPublicacion: fecha,
            contenido: this.contenido.value,
            titulo: this.titulo.value,
            profesionales_id: this.profesional.id,
        };
       
        this.avisosService.create(aviso).subscribe(responde=>{
            console.log(aviso);
            this.dialogRef.close();
        })

    }


    actualizarAviso(): void{
        const aviso: Aviso ={
            id:this.id.value,
            fechaPublicacion: this.fechaPublicacion.value,
            contenido: this.contenido.value,
            titulo: this.titulo.value,
            profesionales_id: this.profesional.id,
        };

        this.avisosService.update(aviso).subscribe(responde=>{
            console.log(aviso);
            this.dialogRef.close();
        })
        
    }

    cancelar(): void{
        this.dialogRef.close()

    }
    
    

    
}