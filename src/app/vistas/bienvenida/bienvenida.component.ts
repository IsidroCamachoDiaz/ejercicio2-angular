import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent  implements OnInit{
  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(private router: Router,private f:FormBuilder,public authService: AuthService) {}
  ngOnInit(): void {
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
}
