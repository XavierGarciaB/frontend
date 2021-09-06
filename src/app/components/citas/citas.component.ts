import { HorariosService } from 'src/app/services/horarios/horarios.service';
import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/services/citas/cita.service';
import { Cita } from 'src/app/interfaces/cita';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { CalendarEvent } from 'angular-calendar';
import { Constants } from 'src/app/constants';
const colors: any = Constants.colors

@Component({
    selector: 'app-citas',
    templateUrl: './citas.component.html',
    styleUrls: ['./citas.component.css'],

})
export class CitasComponent implements OnInit{
    public userId: Number;

    citas: Cita[] = [];
    events: CalendarEvent[] = []
    

    constructor(
        private horariosService: HorariosService,
        private citasService: CitasService,
        private profesionalesService:  ProfesionalService
        
    ){}

    getCitas(userId){
        this.citasService.list(userId).subscribe(citas=>{
            this.citas = citas
            for(let cita of this.citas){
                this.setHorario(cita)
            }})
    }

    setHorario(cita: Cita){
        this.horariosService.get(parseInt(cita.horarios_id)).subscribe(horario=>{
            cita.horario = horario
            this.setProfesional(cita)})
    }

    setProfesional(cita: Cita){
        this.profesionalesService.get(parseInt(cita.horario.profesionales_id)).subscribe(profesional=>{
            cita.horario.profesional = profesional
            this.addEvento(cita)})
    }

    addEvento(cita:Cita){
        let evento = {
            id: cita.id,
            title: "Cita con "+cita.horario.profesional.nombre+"<br>Lugar: "+cita.horario.profesional.direccion,
            color: colors.yellow,
            text: cita.horario.profesional.direccion,
            start: this.formatDate(cita.horario.fecha,cita.horario.horaInicio),
            end: this.formatDate(cita.horario.fecha,cita.horario.horaFin),
        }
        if(cita.estado=="cancelada"){
            evento.color = colors.red
        }else if(cita.estado=="finalizada"){
            evento.color = colors.blue
        }
        this.events.push(evento)
    }

    formatDate(date, time){
        let fecha = date.split("-")
        let hora = time.split(":")
        return new Date(fecha[0],fecha[1]-1,fecha[2],hora[0],hora[1],hora[2])
    }

    ngOnInit(): void{
        this.userId = 1
        this.getCitas(this.userId)
    }


}




