import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { Aviso } from 'src/app/interfaces/aviso';
import { AvisosService } from 'src/app/services/avisos/aviso.service';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
@Component({
    selector: 'app-avisos',
    templateUrl: './avisos.component.html',
    styleUrls: ['./avisos.component.css'],
})

export class AvisosComponent implements OnInit{
    selectedValue: string;

    avisos: Aviso[] = [];
    selectedAvisos: Aviso[]=[];
    profesionales = [{id:0,nombre:"Todos"}];


    constructor(
        private avisosService: AvisosService,
        private profesionalesService: ProfesionalService,
    ){}

    ngOnInit(){
        this.getAvisos().subscribe(avisos=>{
            this.avisos = avisos;
            this.avisos.forEach(element=>{
                this.setAvisoProfesional(element)
            })
            this.selectedAvisos =this.avisos


          })
        console.log(this.avisos);

    }
    
    getAvisos(){
        return this.avisosService.list()
      }

      search(idProfesional){
        this.selectedAvisos = []
        if(idProfesional!=0){
          for(let aviso of this.avisos){
            if(aviso.profesionales_id==idProfesional){
              this.selectedAvisos.push(aviso)
            }
          }
        }else{
          this.selectedAvisos = this.avisos
        }
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

      setAvisoProfesional(aviso:Aviso): void{
        this.profesionalesService.get(aviso.profesionales_id).subscribe(profesional=>{
          aviso.profesional = profesional
          let element = {id:profesional.id,nombre:profesional.nombre}
          if(!this.profesionales.includes(element) && this.profesionales.length!=0){
            this.addProfesional(element)
          }else{
            this.profesionales.push(element)
          }
        })
      }
    

    

}