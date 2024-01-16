import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  constructor(private router: Router) {}

  mostrarBienvenida = true;

  irAlEnlace() {
    this.mostrarBienvenida = false;  // Cambia la visibilidad para mostrar el nuevo componente
  }
}
