import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { CitasComponent } from './components/citas/citas.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { ResenasDialogComponent } from './components/resenas/resenasDialog.component';
import { CalendarComponent } from './components/calendar/calendar.component';
// Angular Material Library
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

import { ProfesionalesComponent } from './components/profesionales/profesionales.component';
import { ProfesionalDescriptionComponent } from './components/profesional-description/profesional-description.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { NZ_I18N, es_ES} from 'ng-zorro-antd/i18n';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    HeaderComponent,
    CitasComponent,
    AvisosComponent, 
    ResenasComponent,
    ResenasDialogComponent,
    ProfesionalesComponent,
    ProfesionalDescriptionComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    CalendarComponent
  ],
 
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

    
  ],
  
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }

