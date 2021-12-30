import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageModule } from './page/page.module';
import { SharedModule } from './shared/shared.module';
import { RecortarTextoPipe } from './pipes/recortar-texto.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecortarTextoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
