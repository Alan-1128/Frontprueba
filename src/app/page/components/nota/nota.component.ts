import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { usuarios } from 'src/app/services/usuarios.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit, OnDestroy {
  
  apiId = JSON.parse(localStorage.getItem('resultados')!) || [];
  apiSubscription!: Subscription;

  numero:number = 0;

  constructor(public usu:usuarios, private fb:FormBuilder,private apiService:ApiService) { }

  ngOnInit(): void {
    let idHome:number = this.apiService.numero;

    this.apiSubscription = this.apiService.obtenerDatos(idHome).subscribe(data => {
      this.apiId = data
      localStorage.setItem('resultados', JSON.stringify(this.apiId));
    });

  }
  
  // ------------------------------------------------------------------------------------------------------Formulario Reactivo
  miFormulario:FormGroup = this.fb.group ({
    msjComentario: ['', [Validators.required, Validators.minLength(5)]],
  })

  guardar(){
    if(this.miFormulario.invalid){
      return;
    }

    this.apiService.agregarComentario(this.apiId.id,this.miFormulario.value).subscribe();

    this.miFormulario.reset();
  }
  
  
  formularioRespuesta:FormGroup = this.fb.group ({
    msjRespuesta: ['', [Validators.required, Validators.minLength(5)]],
  })

  guardarRespuesta(id: number){

    if(this.formularioRespuesta.invalid){
      return;
    }
    
    this.apiService.agregarRespuesta(id, this.formularioRespuesta.value).subscribe();
    
    this.formularioRespuesta.reset();
  }
  // ------------------------------------------------------------------------------------------------------Formulario Reactivo
  
  






  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }

}
