import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TestComponent } from './test/test.component';
import {HomeComponent} from './home/home.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { CitasComponent } from './components/citas/citas.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { ProfesionalDescriptionComponent } from './components/profesional-description/profesional-description.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path: 'test', component: TestComponent },
  {path: 'profesionales', component: ProfesionalesComponent },
  {path: 'profesionales/:id', component: ProfesionalDescriptionComponent },
  {path: 'citas', component: CitasComponent },
  {path: 'avisos', component: AvisosComponent },
  {path: 'resenas', component: ResenasComponent }
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
