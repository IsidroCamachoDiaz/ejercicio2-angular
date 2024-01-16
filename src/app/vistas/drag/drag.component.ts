import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent {
  todo = [
    'Procesador Intel Core i9-9900K',
    'Tarjeta Gráfica NVIDIA GeForce RTX 3080',
    'Memoria RAM Corsair Vengeance LPX 16GB DDR4',
    'SSD Samsung 970 EVO Plus 1TB'
  ];

  done = [
    'Placa Base ASUS ROG Strix B550-F Gaming',
    'Procesador AMD Ryzen 7 5800X',
    'Tarjeta Gráfica AMD Radeon RX 6700 XT',
    'Memoria RAM Kingston HyperX Fury 32GB DDR4',
    'SSD Crucial P5 2TB NVMe'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
