import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TestComponent } from './test/test.component';
import {HomeComponent} from './home/home.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { CitasComponent } from './components/citas/citas.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { ProfesionalDescriptionComponent } from './components/profesional-description/profesional-description.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { MisAvisosComponent } from './components/profesionalesAdmin/misAvisos/misAvisos.component';
import { MisHorariosComponent } from './components/profesionalesAdmin/misHorarios/misHorarios.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path:'home', component: HomeComponent},
      {path: 'test', component: TestComponent },
      {path: 'profesionales', component: ProfesionalesComponent },
      {path: 'profesionales/:id', component: ProfesionalDescriptionComponent },
      {path: 'citas', component: CitasComponent },
      {path: 'avisos', component: AvisosComponent },
      {path: 'resenas', component: ResenasComponent },
      {path: 'perfil', component: PerfilComponent },
      {path: 'misHorarios', component: MisHorariosComponent },
      {path: 'misAvisos', component: MisAvisosComponent },
    ]
  },
  {path: 'auth/login', component: LoginComponent },
  {path: 'auth/register', component: RegisterComponent },
  {path:'', redirectTo: '/auth/login', pathMatch: 'full'},
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
