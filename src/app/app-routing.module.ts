import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TestComponent } from './test/test.component';
import {HomeComponent} from './home/home.component';
import { AvisosComponent } from './avisos/avisos.component';
import { CitasComponent } from './citas/citas.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path: 'test', component: TestComponent },
  {path: 'citas', component: CitasComponent },
  {path: 'avisos', component: AvisosComponent }
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }