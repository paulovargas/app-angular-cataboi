import { Component } from '@angular/core';
import { TodasPropriedadesComponent } from "./todas-propriedades/todas-propriedades.component";

@Component({
  selector: 'app-propriedades',
  standalone: true,
  imports: [TodasPropriedadesComponent],
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {

}
