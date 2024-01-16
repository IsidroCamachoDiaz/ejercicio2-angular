import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    { name: 'Álava', abbreviation: 'AL' },
    { name: 'Albacete', abbreviation: 'AB' },
    { name: 'Alicante', abbreviation: 'AL' },
    { name: 'Almería', abbreviation: 'AM' },
    { name: 'Asturias', abbreviation: 'AS' },
    { name: 'Ávila', abbreviation: 'AV' },
    { name: 'Badajoz', abbreviation: 'BA' },
    { name: 'Barcelona', abbreviation: 'BCN' },
    { name: 'Burgos', abbreviation: 'BU' },
    { name: 'Cáceres', abbreviation: 'CC' },
    { name: 'Cádiz', abbreviation: 'CA' },
    { name: 'Cantabria', abbreviation: 'CB' },
    { name: 'Castellón', abbreviation: 'CS' },
    { name: 'Ciudad Real', abbreviation: 'CR' },
    { name: 'Córdoba', abbreviation: 'CO' },
    { name: 'Cuenca', abbreviation: 'CU' },
    { name: 'Gerona', abbreviation: 'GIR' },
    { name: 'Granada', abbreviation: 'GR' },
    { name: 'Guadalajara', abbreviation: 'GU' },
    { name: 'Guipúzcoa', abbreviation: 'SS' },
    { name: 'Huelva', abbreviation: 'H' },
    { name: 'Huesca', abbreviation: 'HU' },
    { name: 'Islas Balears', abbreviation: 'IB' },
    { name: 'Jaén', abbreviation: 'J' },
    { name: 'La Coruña', abbreviation: 'C' },
    { name: 'La Rioja', abbreviation: 'LO' },
    { name: 'Las Palmas', abbreviation: 'GC' },
    { name: 'León', abbreviation: 'LE' },
    { name: 'Lérida', abbreviation: 'L' },
    { name: 'Lugo', abbreviation: 'LU' },
    { name: 'Madrid', abbreviation: 'M' },
    { name: 'Málaga', abbreviation: 'MA' },
    { name: 'Murcia', abbreviation: 'MU' },
    { name: 'Navarra', abbreviation: 'NA' },
    { name: 'Orense', abbreviation: 'OR' },
    { name: 'Palencia', abbreviation: 'P' },
    { name: 'Pontevedra', abbreviation: 'PO' },
    { name: 'Salamanca', abbreviation: 'SA' },
    { name: 'Santa Cruz de Tenerife', abbreviation: 'TF' },
    { name: 'Segovia', abbreviation: 'SG' },
    { name: 'Sevilla', abbreviation: 'SE' },
    { name: 'Soria', abbreviation: 'SO' },
    { name: 'Tarragona', abbreviation: 'T' },
    { name: 'Teruel', abbreviation: 'TE' },
    { name: 'Toledo', abbreviation: 'TO' },
    { name: 'Valencia', abbreviation: 'V' },
    { name: 'Valladolid', abbreviation: 'VA' },
    { name: 'Vizcaya', abbreviation: 'BI' },
    { name: 'Zamora', abbreviation: 'ZA' },
    { name: 'Zaragoza', abbreviation: 'Z' }
  ];

  onSubmit(): void {
    alert('Thanks!');
  }
}
