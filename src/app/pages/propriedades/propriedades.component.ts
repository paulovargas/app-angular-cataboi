import { Component } from '@angular/core';
import { TodasPropriedadesComponent } from "./todas-propriedades/todas-propriedades.component";
import { FormPropriedadesComponent } from './form-propriedades/form-propriedades.component';

@Component({
  selector: 'app-propriedades',
  standalone: true,
  imports: [
    FormPropriedadesComponent,
    TodasPropriedadesComponent
  ],
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {

}
