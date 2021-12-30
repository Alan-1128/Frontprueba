import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SweetAlert2Module
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
