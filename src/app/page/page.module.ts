import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarComponent } from './components/agregar/agregar.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { NotaComponent } from './components/nota/nota.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComentarioRespuestaComponent } from './components/comentario-respuesta/comentario-respuesta.component';


@NgModule({
  declarations: [
    AgregarComponent,
    LogginComponent,
    NotaComponent,
    ComentarioRespuestaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PageModule { }
