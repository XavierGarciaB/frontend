import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/interfaces/horario';
import { Profesional } from 'src/app/interfaces/profesional';
import { HorariosService } from 'src/app/services/horarios/horarios.service';
import { ProfesionalService } from 'src/app/services/profesional/profesional.service';
import { CitasService } from 'src/app/services/citas/cita.service';
import Swal from 'sweetalert2';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {
  profesionales: Profesional[] = [];
  public userId: Number;

  constructor(
    private profesionalService: ProfesionalService,
    private horarioService: HorariosService,
    private citasService: CitasService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.setUserId()
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

  reservarCita(horario: Horario, profesional: Profesional){
    Swal.fire({
      title: 'Cita con '+profesional.nombre,
      html:
        '<p>¿Desea reserva la cita?</p>',
      showDenyButton: true,
      showConfirmButton: true,
      showCloseButton: true,
      denyButtonText: `No`,
      confirmButtonText: `Sí`
    }).then((result) => {
      this.crearCita(this.userId,horario,profesional)
    })
  }

  crearCita(userId,horario:Horario,profesional:Profesional){
    let payload={
      estado: "pendiente",
      usuarios_id: userId,
      horarios_id: horario.id
    }
    this.citasService.create(payload).subscribe(result=>{
      this.changeState(horario,profesional)
    })
  }

  changeState(horario: Horario, profesional: Profesional): void {
    horario.disponible = !horario.disponible;
    this.horarioService.update(horario).subscribe(response => {
      this.fetchHorarios(profesional);
    });
  }

  setUserId(){
    this.userId = this.usuariosService.usuario.id
}

}
