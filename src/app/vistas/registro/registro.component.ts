import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  u:User={
    id: 9,
    email: "string",
    nombre: "string",
    foto: "",
    emailVerified: false,
    rol: '',
    contrasenia: ''
  }
  constructor(
    public authService: AuthService,
    private f:FormBuilder
  ) { }
  ngOnInit() { }

  formulario=this.f.group({
    nombre: ['',[ Validators.required]],
    contrasenia: ['',[ Validators.required]],
    email:["",[ Validators.required]],
    rol:["",[ Validators.required]]
  });

  anadirFormulario(){
    this.u.email=this.formulario.get("email").value;
    this.u.rol=this.formulario.get("rol").value;
    this.u.contrasenia=this.formulario.get("contrasenia").value;
  }
}
