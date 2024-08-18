import { Component } from '@angular/core';
import { TodosEventosComponent } from "./todos-eventos/todos-eventos.component";

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [TodosEventosComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

}
