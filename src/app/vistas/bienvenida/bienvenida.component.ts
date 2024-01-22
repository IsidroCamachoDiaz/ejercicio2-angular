import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent  implements OnInit{
  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(private router: Router,private f:FormBuilder,public authService: AuthService,private fbs:BaseDeDatosService) {}
  ngOnInit(): void {
  }
  usuario:User={
    id: 9,
    email: "string",
    nombre: "string",
    foto: "",
    emailVerified: false,
    rol: '',
    contrasenia: ''
  }

  formulario=this.f.group({
    nombre: ['',[ Validators.required]],
    contrasenia: ['',[ Validators.required]],
    email:["",[ Validators.required]],
    rol:["",[ Validators.required]]
  });
  mostrarBienvenida = true;

  irAlEnlace() {
    this.mostrarBienvenida = false;  // Cambia la visibilidad para mostrar el nuevo componente
  }

  anadirFormulario(){
  this.usuario.email=this.formulario.get("email").value;
  const constrasenia=this.formulario.get("contrasenia").value;

  this.fbs.queyCollection("usuarios","correo",this.usuario.email).subscribe(res=>{
    this.usuario=res[0];
    if(this.usuario.id){
      alert("El correo y/o contraseña son incorrectos")
    }
    else{
      if(this.usuario.contrasenia!=constrasenia){
        alert("El correo y/o contraseña son incorrectos")
      }
      else{
        alert("Accedio Correctamente")
        this.irAlEnlace();
      }
    }
  })
  }
}


