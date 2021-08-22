import { Component, OnInit } from '@angular/core';
import { Profesional } from '../interfaces/profesional';
import { ProfesionalService } from '../services/profesional/profesional.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  profesionales: Profesional[] = [];
  profiCreate: Profesional;

  constructor(
    private profesionalService: ProfesionalService
  ) { }

  ngOnInit(): void {
    this.fetchProfesionales();
  }

  fetchProfesionales(): void {
    this.profesionalService.list().subscribe(profesionales => {
      this.profesionales = profesionales;
    });
  }

  createProfi(): void {
    const profi: Profesional = {
      nombre: "Create",
      edad: 23,
      direccion: "Centro"
    };
    this.profesionalService.create(profi).subscribe(response => {
      console.log(response.message);
      this.fetchProfesionales();
    });
  }

  updateProfi(profesional: Profesional): void {
    const profi: Profesional = {
      id: profesional.id,
      nombre: `${profesional.nombre} PATCH`,
      edad: profesional.edad * 10,
      direccion: `${profesional.direccion} PATCH`
    };
    this.profesionalService.update(profi).subscribe(response => {
      console.log(response.message);
      this.fetchProfesionales();
    });
  }

  deleteProfi(id: number): void {
    this.profesionalService.delete(id).subscribe(response => {
      console.log(response.message);
      this.fetchProfesionales();
    })
  }

}
