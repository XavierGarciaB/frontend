import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/interfaces/horario';
import { HorariosService } from 'src/app/services/horarios/horario.service';

@Component({
    selector: 'app-citas',
    templateUrl: './citas.component.html',
    styleUrls: ['./citas.component.css'],
})
export class CitasComponent implements OnInit{
    horarios: Horario[] = [];
    constructor(
        private horariosService: HorariosService,
        
    ){}

    ngOnInit(){
        this.getHorarios().subscribe(horarios=>{
            this.horarios = horarios;
          })

    }



    getHorarios(){
        return this.horariosService.list()
      }

}