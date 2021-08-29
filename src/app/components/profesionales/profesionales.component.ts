import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/interfaces/horario';
import { Profesional } from 'src/app/interfaces/profesional';
import { HorariosService } from 'src/app/services/horarios/horarios.service';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {
  profesionales: Profesional[] = [];

  constructor(
    private profesionalService: ProfesionalService,
    private horarioService: HorariosService
  ) { }

  ngOnInit(): void {
    this.fetchProfesionales();
  }

  fetchProfesionales(): void {
    this.profesionalService.list().subscribe(profesionales => {
      this.profesionales = profesionales;
      for (let profesional of this.profesionales) {
        this.fetchHorarios(profesional);
      }
    });
  }

  fetchHorarios(profesional: Profesional): void {
    this.horarioService.list(profesional.id).subscribe(horarios => {
      profesional.horarios = horarios;
    });
  }

  changeState(horario: Horario, profesional: Profesional): void {
    horario.disponible = !horario.disponible;
    this.horarioService.update(horario).subscribe(response => {
      this.fetchHorarios(profesional);
    });
  }

}
