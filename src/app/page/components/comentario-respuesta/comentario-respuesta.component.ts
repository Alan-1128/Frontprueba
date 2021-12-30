import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentario-respuesta',
  templateUrl: './comentario-respuesta.component.html',
  styleUrls: ['./comentario-respuesta.component.css']
})
export class ComentarioRespuestaComponent implements OnInit {

  visible: boolean = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // miFormulario:FormGroup = this.fb.group ({
  //   mensaje: ['', [Validators.required, Validators.minLength(1)]],
  // })

  // validacion(campo:string){
  //   return this.miFormulario.controls[campo].errors 
  //   && this.miFormulario.controls[campo].touched
  // }

  // guardar(){
  //   if(this.miFormulario.invalid){
  //     this.miFormulario.markAllAsTouched();
  //     return;
  //   }

  //   console.log(this.miFormulario.value)
  //   this.miFormulario.reset();
  // }


}
