import { CalendarView, CalendarEvent } from 'angular-calendar';
import Swal from 'sweetalert2';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { HorariosService } from 'src/app/services/horarios/horarios.service';
import { CitasService } from 'src/app/services/citas/cita.service';
import {
    isSameDay,
    isSameWeek,
    isSameMonth,
  } from 'date-fns';
import { Horario } from 'src/app/interfaces/horario';
import { Constants } from 'src/app/constants';

const colors: any = Constants.colors

@Component({
    selector: 'app-calendar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],

})

export class CalendarComponent{
    viewDate: Date = new Date();
    CalendarView = CalendarView;
    view: CalendarView = CalendarView.Month;
    locale: string = 'es';

    
    activeDayIsOpen: boolean = false;
    refresh: Subject<any> = new Subject();
    @Input()
    events: CalendarEvent[] = []


    constructor(
        private horariosService: HorariosService,
        private citasService: CitasService,
        
    ){}

    setView(view: CalendarView) {
        this.view = view;
      }
    
    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
          let sameDay = isSameDay(this.viewDate, date) && this.activeDayIsOpen === true;
          if (sameDay|| events.length === 0) {
            this.activeDayIsOpen = false;
          } else{
            this.activeDayIsOpen = true;
          }
          this.viewDate = date;
        }
      }

    handleEvent(action: string, event: CalendarEvent): void {
        let contenido = event.title.split("<br>")
        let lugar = contenido[1].split(" ")
        if (event.color.primary==colors.yellow.primary){
          
            Swal.fire({
                title: '<strong><p>'+contenido[0]+'</p></strong>',
                html:
                  '<p><strong>Hora de inicio</strong>: '+event.start+'</p>'+
                  '<p><strong>Hora de fin</strong>: '+event.end+'</p>'+
                  '<p><strong>Lugar</strong>: '+lugar[1]+'</p>',
                showDenyButton: true,
                showConfirmButton: false,
                showCloseButton: true,
                denyButtonText: `Cancelar cita`,
              }).then((result) => {
                this.cancelarCita(result,event);
              })
        }else{
            Swal.fire({
                title: '<strong><p>'+contenido[0]+'</p></strong>',
                html:
                  '<p>Cita '+this.getEstado(event.color.primary)+'</p>',
                showDenyButton: false,
                showConfirmButton: false,
                showCloseButton: true,
              })
        }
    }

    cancelarCita(result, event){
        if (result.isDenied) {
            this.citasService.update({estado: "cancelada",id:event.id}).subscribe(result=>{
                Swal.fire(
                    'Cita cancelada',
                    'La cita ha sido cancelada exitosamente.',
                    'success'
                  ).then((result)=>{
                    event.color = colors.red
                    this.updateStateHorario(event,event.id)
                  })
            })
        }
    }

    updateStateHorario(event,citaId){
      this.citasService.getCitaById(citaId).subscribe((cita)=>{
        let horario: Horario
        this.horariosService.get(parseInt(cita.horarios_id)).subscribe(elem=>{
          horario = elem
          horario.disponible = true
          this.horariosService.update(horario)
        })
      })

    }

    getEstado(color){
        if(color==colors.red.primary){
            return "cancelada"
        }else{
            return "finalizada"
        }
    }

    refreshEvents(){
        window.location.reload()
    }

    
}