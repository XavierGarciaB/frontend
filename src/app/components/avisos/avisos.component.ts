import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aviso } from 'src/app/interfaces/aviso';
import { AvisosService } from 'src/app/services/avisos/aviso.service';
@Component({
    selector: 'app-avisos',
    templateUrl: './avisos.component.html',
    styleUrls: ['./avisos.component.css'],
})
export class AvisosComponent implements OnInit{

    avisos: Aviso[] = [];


    constructor(
        private avisosService: AvisosService,
    ){}

    ngOnInit(){
        this.getAvisos().subscribe(avisos=>{
            this.avisos = avisos;
          })

    }


    getAvisos(){
        return this.avisosService.list()
      }

}